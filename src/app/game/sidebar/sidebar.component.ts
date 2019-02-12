import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../../services/my-first-service.service';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  host: { class: 'side-bar' }
})
export class SidebarComponent {
  @Input() public allMessages: string[];
  @Input() public players: TPlayer;
  @Input() public gameInProgress: boolean;
  @Input() public thisRoom: TRoom;

  @Output() public gameStarted: EventEmitter<void> = new EventEmitter();

  public blackJackData: TLocalData = this._myService.blackJackData;

  constructor(private _myService: MyFirstServiceService) {}

}
