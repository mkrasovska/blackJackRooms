import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { DataBaseService } from '../services/data-base.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-game-multi',
  templateUrl: './game-multi.component.html',
  styleUrls: ['./game-multi.component.css']
})
export class GameMultiComponent implements OnInit {
  public rooms: TRoom[] = [];
  public roomsFiltered: TRoom[] = [];
  public roomCounter: number = 0;
  public numberOfHumans: number = 0;
  public numberOfBots: number = 0;
  public searchQuery: string;
  public defaultMaxPlayers: number = 2;

  public constructor(public db: AngularFireDatabase, private _dataBaseService: DataBaseService) {}

  public isClosed(room: TRoom): boolean {
    return room.counter >= room.maxPlayers || room.gameInProgress;
  }

  public addRoom(form: NgForm): void {
    this._dataBaseService.addRoom(
      form.controls.roomName.value, form.controls.maxPlayers.value,
      false
    );
  }

  public deleteRoom(roomId: number): void {
    this._dataBaseService.deleteRoom(roomId);
  }

  public searchByQuery(searchQuery: string): void {
    if (this.searchQuery) {
      this.roomsFiltered = this.rooms.filter(
        (room: TRoom) =>
          ~String(room.id).indexOf(searchQuery) ||
          ~room.name.toLowerCase().indexOf(searchQuery.toLowerCase()) ||
          Object.values(room.players).some((player: TPlayer) =>
            Boolean(~player.name.toLowerCase().indexOf(searchQuery.toLowerCase()))
          ) ||
          Object.values(room.players).some((player: TPlayer) =>
            Boolean(~String(player.id).indexOf(searchQuery))
          )
      );
    } else {
      this.roomsFiltered = this.rooms;
    }
  }

  public ngOnInit(): void {
    this._dataBaseService.getRooms().subscribe((rooms: TRoom[]) => {
      this.rooms = rooms;
      this.roomsFiltered = rooms;
      this.rooms.forEach((myroom: TRoom) => {
        myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0;
      });
    });
  }
}
