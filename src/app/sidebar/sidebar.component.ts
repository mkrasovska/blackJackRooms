import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Router } from '@angular/router';

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


  public constructor(private _myService: MyFirstServiceService, public router: Router) {}

  public addBot(): void {
    if (this.players.length >= this.thisRoom.maxPlayers) {
      alert(`Maximum allowed number of players in this room is ${this.thisRoom.maxPlayers}`);
      return;
    } else {
      this._myService.addBot();
    }
  }

  public increaseRoom(): void {
    if (this.thisRoom.maxPlayers >= 6) {
      alert('Room capacity should not exced 6 players');
      return;
    } else {
    this.thisRoom.maxPlayers++;
    this._myService.changeMaxPlayers(this.thisRoom.maxPlayers, this.thisRoom.id);
    }
  }

  public decreaseRoom(): void {
    if (this.thisRoom.maxPlayers <= this.players.length) {
      alert(`You cannot decrease room when it\'s full`);
      return;
    } else {
      this.thisRoom.maxPlayers--;
      this._myService.changeMaxPlayers(this.thisRoom.maxPlayers, this.thisRoom.id);
    }
  }

  public deleteBot(): void {
    if (!this.players[this.players.length - 1].isBot) {
      return;
    }
    if (this.players.length === 2) {
      alert('You are trying to kill the last opponent. Stop please!');
      return;
    }
    const deletedBot: TPlayer = this.players.pop();
   this._myService.removePlayer(deletedBot.id, this.thisRoom.id);
  }
}
