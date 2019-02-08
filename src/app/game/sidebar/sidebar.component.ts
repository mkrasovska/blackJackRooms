import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../../services/my-first-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  host: { class: 'side-bar' }
})
export class SidebarComponent {
  @Input() public allMessages: string[];
  @Input() public players: TPlayer;
  // @Input() public scorePlayerTwo: number;
  @Input() public gameInProgress: boolean;
  @Input() public thisRoom: TRoom;

  @Output() public gameStarted: EventEmitter<void> = new EventEmitter();

  public blackJackData: TLocalData = this._myService.blackJackData;

  // private _detsroy$$: Subject<void> = new Subject();

  constructor(private _myService: MyFirstServiceService) {}

//   ngOnInit() {
//     this._myService.getThisRoomData(this._myService.roomId).pipe(takeUntil(this._detsroy$$))
//       .subscribe(room){
//         this.room = room      };
//   }

//   ngOnDestroy() {
//     this._detsroy$$.next();
//   }
}
