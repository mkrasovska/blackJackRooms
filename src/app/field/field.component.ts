import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  host: { class: 'game-field' }
})
export class FieldComponent implements OnInit, OnDestroy {
  @Output() public cardTaken: EventEmitter<void> = new EventEmitter();
  @Output() public gameStopped: EventEmitter<void> = new EventEmitter();
  @Input() public gameInProgress: boolean;
  @Input() public players: TPlayer[];
  @Input() public blackJackData: TLocalData;

  public subRoom: Subscription;
  private _destroy$$: Subject<void> = new Subject();
  public isActive: boolean = false;
  public isMyTurn: boolean = false;
  public playersObj: {} = {};
  public thisRoom: {} = {};

  public constructor(private _myService: MyFirstServiceService) {}

  ngOnInit() {
    this.subRoom = this._myService
      .getThisRoomData(this._myService.roomId)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((room: TRoom) => {
        this.thisRoom = room;
        if (room.players) {
          this.players = Object.values(room.players);
          this.playersObj = room.players;
          this.isActive = this.players.every((player: TPlayer) => player.ready);
          this.isMyTurn = this.playersObj[this.blackJackData.userId].isMyTurn;
        }
      });
  }

  ngOnDestroy() {
    this._destroy$$.next();
  }
}

