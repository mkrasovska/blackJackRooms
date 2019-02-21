import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subject } from 'rxjs';
import { takeUntil, pluck, switchMap, tap, filter } from 'rxjs/operators';
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
  public players: TPlayer[] = [];
  // public playerNumber: number = 0;
  // public humansNumber: number = 0;
  public mayIComeIn: boolean = false;
  private _destroy$$: Subject<void> = new Subject();

  public constructor(
    private route: ActivatedRoute,
    public db: AngularFireDatabase,
    private _myService: MyFirstServiceService,
    private router: Router
  ) {
  }
  // @HostListener('window:beforeunload') doOnUnload(): void {
  //   alert('unload!');
  // }

  public ngOnInit(): void {
    if (this._myService.getMyData()) {
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
          this.players = room.players ? Object.values(room.players) : [];
          // this.playerNumber = this.players.length;
          // this.humansNumber = this.players
          //   ? Object.keys(this.playersArr.filter((player: TPlayer) => player.isBot)).length
          //   : 0;
        }),
        tap((room: TRoom) => {
          if (room.gameInProgress && !room.players[this.blackJackData.userId]) {
            this.router.navigate(['closed-room']);
          }
          if (
            room.maxPlayers <= this.players.length &&
            !room.players[this.blackJackData.userId]
          ) {
            this.router.navigate(['closed-room']);
          }
          if (room.singleRoom && room.masterId !== this.blackJackData.userId) {
            this.router.navigate(['closed-room']);
          }
        }),
        filter(
          (room: TRoom) =>
            room.maxPlayers > this.players.length || !!room.players[this.blackJackData.userId]
        ),
        filter(
          (room: TRoom) => !room.gameInProgress || !!room.players[this.blackJackData.userId]
        ),
        filter(
          (room: TRoom) => !room.singleRoom || room.masterId === this.blackJackData.userId
        ),
        tap(() => {
          this.mayIComeIn = true;
        }),
        filter((room: TRoom) => {
          return room.players ? !room.players[this.blackJackData.userId] : true;
        }),
        tap((room: TRoom) => {
          const newPlayer: TPlayer = this._myService.createPlayer(
            this.blackJackData.userName,
            false,
            this.blackJackData.userId
          );
          this._myService.updatePlayer(newPlayer, this._myService.roomId);
          if (room.singleRoom) {
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
      this._myService.deleteEmptyRoom(this.players, this.thisRoom.id);
    }
  }
}
