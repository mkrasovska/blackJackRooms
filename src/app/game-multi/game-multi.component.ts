import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


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
    private router: Router
  ) {}

  // public addRoom(roomName: string, maxPlayers: number): void {
  //   const roomId: number = new Date().getUTCMilliseconds();
  //   const blackJackData: TLocalData = this._myService.getMyData() || this._myService.randomUserData;
  //   this.db.object('/rooms/room' + roomId).update({
  //     name: roomName,
  //     maxPlayers: maxPlayers || 2,
  //     id: roomId,
  //     // counter: 0,
  //     masterId: blackJackData.userId,
  //     deck: this._myService.createDeck(),
  //     players: {},
  //     gameInProgress: false
  //   });
  //   this.router.navigate(['/playroom', roomId]);
  // }

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

  ngOnInit() {
    this._myService.getRoomData().subscribe((rooms: TRoom[]) => {
      this.rooms = rooms;
      this.rooms.forEach((myroom: TRoom) => {
        myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0;
        // this.numberOfBots = myroom.players
        //  ? Object.values(myroom.players).filter((player: TPlayer) => player.isBot).length : 0;
        // this.numberOfHumans = myroom.counter - this.numberOfBots;
      });
    });
  }
}
