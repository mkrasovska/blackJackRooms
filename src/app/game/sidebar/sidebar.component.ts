import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../../services/my-first-service.service';
import { Router } from '@angular/router';
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
  @Input() public players: TPlayer[];
  @Input() public gameInProgress: boolean;
  @Input() public thisRoom: TRoom;
  @Input() public blackJackData: TLocalData;

  @Output()
  public gameStarted: EventEmitter<void> = new EventEmitter();

  // public blackJackData: TLocalData = this._myService.blackJackData;

  constructor(private _myService: MyFirstServiceService, public router: Router) {}

  public addBot(): void {
    const newBot: TPlayer = this._myService.createPlayer(
      this._myService.randomNick(),
      true,
      this._myService.getRandom() + 100000
    );
    // this.players.push(newBot);
    console.log(this.players);
    this._myService.updatePlayer(newBot, this.thisRoom.id);
  }

  public deleteBot(): void {
    if (this.players[this.players.length - 1].isBot) {
      const deletedBot: TPlayer = this.players.pop();
      console.log(this.players);
      this._myService.removePlayer(deletedBot.id, this.thisRoom.id);
    }
  }
}
