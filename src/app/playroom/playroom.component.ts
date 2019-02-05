import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-playroom',
  templateUrl: './playroom.component.html',
  styleUrls: ['./playroom.component.css']
})
export class PlayroomComponent implements OnInit, OnDestroy {
  public id: number;
  private sub: Subscription;
  private sub1: Subscription;
  // public rooms: TRoom[] = [];
  public thisRoom: TRoom;
  // public newCount: number;
  public blackJackData: TLocalData = this._myService.getMyData();
  public players: {} = {};
  private _destroy$$ = new Subject();

  public constructor(
    private route: ActivatedRoute,
    public db: AngularFireDatabase,
    private _myService: MyFirstServiceService
  ) {}

  ngOnInit() {
    // this._myService.getRoomData().subscribe((rooms: TRoom[]) => {
    //   this.rooms = rooms;
    // });

    this.sub = this.route.params
      .pipe(takeUntil(this._destroy$$))
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this._myService.roomId = +params['id'];
      });

    this.sub1 = this._myService
      .getThisRoomData(this.id)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((room: TRoom) => {
        this.thisRoom = room;
        this.players = room.players;
        // console.log(this.players);
        const playerNumber: number = this.players ? Object.keys(this.players).length : 0;
        this.db.object('/rooms/room' + this.id).update({ counter: playerNumber });
      });

    this.db.object('/rooms/room' + this.id + `/players/${this.blackJackData.userId}`).update({
      id: this.blackJackData.userId,
      isBot: false,
      name: this.blackJackData.userName,
      cards: [],
      isWinner: false,
      isFinished: false,
      score: 0
    });
  }

  ngOnDestroy() {
    this._destroy$$.next();

    this.db.object('/rooms/room' + this.id + `/players/${this.blackJackData.userId}`).remove();
    this._myService.myBotsId.forEach((botId) => {
      this._myService.removePlayer(botId, this.id);
    });
    const playerNumber: number = this.players ? Object.keys(this.players).length - 1 : 0;
    this.db.object('/rooms/room' + this.id).update({ counter: playerNumber });
    // this.sub.unsubscribe();
    // this.sub1.unsubscribe();
  }
}
