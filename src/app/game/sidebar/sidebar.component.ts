import { Component, Input, EventEmitter, Output } from '@angular/core';

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

  @Output() public gameStarted: EventEmitter<void> = new EventEmitter();
}

