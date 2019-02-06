import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../../services/my-first-service.service';
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

  public subRoom: Subscription;
  public blackJackData: TLocalData = this._myService.blackJackData;
  private _destroy$$ = new Subject();
  public isActive: boolean = false;

  constructor(private _myService: MyFirstServiceService) {}

  ngOnInit() {
    this.subRoom = this._myService
    .getThisRoomData(this._myService.roomId)
    .pipe(takeUntil(this._destroy$$))
    .subscribe((room: TRoom) => {
     if (room.players) {
     this.players = Object.values(room.players);
     this.isActive = this.players.every((player: TPlayer) => player.ready);
     console.log(this.isActive);
     }
    });
  }

   ngOnDestroy() {
   this._destroy$$.next();
   }


}

