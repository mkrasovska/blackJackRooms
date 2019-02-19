import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subject } from 'rxjs';
import { takeUntil, pluck, switchMap, tap, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playroom',
  templateUrl: './playroom.component.html',
  styleUrls: ['./playroom.component.css']
})
export class PlayroomComponent implements OnInit, OnDestroy {
  public id: number;
  public thisRoom: TRoom;
  public blackJackData: TLocalData = this._myService.getMyData() || this._myService.randomUserData;
  public players: {} = {};
  public playerNumber: number = 0;
  // public humansNumber: number = 0;
  public mayIComeIn: boolean = false;
  private _destroy$$: Subject<void> = new Subject();

  public newPlayer: TPlayer = this._myService.createPlayer(
    this.blackJackData.userName,
    false,
    this.blackJackData.userId
  );

  public constructor(
    private route: ActivatedRoute,
    public db: AngularFireDatabase,
    private _myService: MyFirstServiceService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (this._myService.getMyData())  {
      this.blackJackData = this._myService.getMyData();
    } else {
      this.blackJackData = this._myService.randomUserData;
      const stringblackJackData: string = JSON.stringify(this.blackJackData);
      localStorage.setItem('blackJackData', stringblackJackData);
    }
    this.route.params
      .pipe(
        pluck('id'),
        tap((roomId: number) => {
          this._myService.roomId = roomId;
        }),
        switchMap((roomId: number) => this._myService.getThisRoomData(roomId)),
        tap((room: TRoom) => {
          if (!room) {
            this.router.navigate(['closed-room']);
          }
        }),
        filter(Boolean),
        tap((room: TRoom) => {
          this.thisRoom = room;
          this.players = room.players;
          this.playerNumber = this.players ? Object.keys(this.players).length : 0;
          // this.humansNumber = this.players
          //   ? Object.keys(this.playersArr.filter((player: TPlayer) => player.isBot)).length
          //   : 0;
        }),
        tap((room: TRoom) => {
          if (room.gameInProgress && !room.players[this.blackJackData.userId]) {
            this.router.navigate(['closed-room']);
          }
          if (
            room.maxPlayers <= this.playerNumber &&
            !room.players[this.blackJackData.userId]
          ) {
            this.router.navigate(['closed-room']);
          }
        }),
        filter(
          (room: TRoom) =>
            room.maxPlayers > this.playerNumber || !!room.players[this.blackJackData.userId]
        ),
        filter(
          (room: TRoom) => !room.gameInProgress || !!room.players[this.blackJackData.userId]
        ),
        tap(() => {
          this.mayIComeIn = true;
        }),
        filter((room: TRoom) => {
          return room.players ? !room.players[this.blackJackData.userId] : true;
        }),
        tap((room: TRoom) => {
          this._myService.updatePlayer(this.newPlayer, this._myService.roomId);
          if (room.maxPlayers === 1) {
            this._myService.addBot();
          }
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe(() => {});
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();

    this.db
      .object('/rooms/room' + this._myService.roomId + `/players/${this.blackJackData.userId}`)
      .remove();

    if (this.thisRoom) {
      this._myService.deleteEmptyRoom(Object.values(this.players), this.thisRoom.id);
    }
  }
}
