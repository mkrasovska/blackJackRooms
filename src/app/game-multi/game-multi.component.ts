import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { AngularFireDatabase } from 'angularfire2/database';


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

  public constructor(
    private _myService: MyFirstServiceService,
    public db: AngularFireDatabase,
  ) {}

  public addRoom(roomName: string, maxPlayers: number): void {
    if (maxPlayers > 6 || maxPlayers < 1 || Math.floor(maxPlayers) !== maxPlayers) {
      alert('The number of players should be a an integer from 1 to 6');
      return;
    } else {
    this._myService.addRoom(roomName, maxPlayers);
    }
  }

  public deleteRoom(roomId: number): void {
    this.db.list('/rooms').remove('room' + roomId);
  }

  public searchByQuery(searchQuery: string): void {
   this.roomsFiltered = this.rooms.filter((room: TRoom) => room.id === +searchQuery || room.name === searchQuery
   || Object.values(room.players).some((player: TPlayer) => player.name === searchQuery));
  }

  public ngOnInit(): void {
    this._myService.getRoomData().subscribe((rooms: TRoom[]) => {
      this.rooms = rooms;
      this.rooms.forEach((myroom: TRoom) => {
        myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0;
      });
    });
  }
}
