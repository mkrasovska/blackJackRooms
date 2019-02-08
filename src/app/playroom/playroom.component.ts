import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, pluck, switchMap, tap, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playroom',
  templateUrl: './playroom.component.html',
  styleUrls: ['./playroom.component.css']
})
export class PlayroomComponent implements OnInit, OnDestroy {
  public id: number;
  private sub: Subscription;
  public thisRoom: TRoom;
  public blackJackData: TLocalData = this._myService.blackJackData;
  public players: {} = {};
  public playerNumber: number = 0;
  public mayIComeIn: boolean = false;
  private _destroy$$: Subject<void> = new Subject();

  public newPlayer: TPlayer = this._myService.Player(
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

  ngOnInit(): void {
    this.sub = this.route.params
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
        }),
        tap((room: TRoom) => {
          if (room.gameInProgress && !room.players[this._myService.blackJackData.userId]) {
            this.router.navigate(['closed-room']);
          }
          if (
            room.maxPlayers <= this.playerNumber &&
            !room.players[this._myService.blackJackData.userId]
          ) {
            this.router.navigate(['closed-room']);
          }
        }),
        filter(
          (room: TRoom) =>
            room.maxPlayers > this.playerNumber ||
            !!room.players[this._myService.blackJackData.userId]
        ),
        filter(
          (room: TRoom) =>
            !room.gameInProgress || !!room.players[this._myService.blackJackData.userId]
        ),
        tap(() => {
          this.mayIComeIn = true;
        }),
        filter((room: TRoom) => {
          return room.players ? !room.players[this._myService.blackJackData.userId] : true;
        }),
        tap(() => {
          this._myService.updatePlayer(this.newPlayer, this._myService.roomId);
          // this.db
          //   .object('/rooms/room' + this._myService.roomId)
          //   .update({ counter: this.playerNumber });
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe(() => {});
  }

  ngOnDestroy() {
    this._destroy$$.next();

    this.db
      .object('/rooms/room' + this._myService.roomId + `/players/${this.blackJackData.userId}`)
      .remove();
    if (this.playerNumber <= 1) {
      this.db
        .object(
          '/rooms/room' + this._myService.roomId)
        .remove();
    }

    this._myService.myBotsId.forEach((botId) => {
      this._myService.removePlayer(botId, this._myService.roomId);
    });
  }
}
