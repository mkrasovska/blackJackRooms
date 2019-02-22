import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  host: { class: 'game-field' }
})
export class FieldComponent {
  @Output() public cardTaken: EventEmitter<void> = new EventEmitter();
  @Output() public gameStopped: EventEmitter<void> = new EventEmitter();

  @Input() public thisRoom: TRoom;
  @Input() public players: TPlayer[];
  @Input() public blackJackData: TLocalData;

  public constructor() {}

  public showGameProgress(): boolean {
    return this.thisRoom ? this.thisRoom.gameInProgress : false;
  }
}

