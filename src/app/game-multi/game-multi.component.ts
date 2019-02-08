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
  public roomCounter: number = 0;
  public deleteIsDisables: boolean ;

  public constructor(
    private _myService: MyFirstServiceService,
    public db: AngularFireDatabase,
    private router: Router
  ) {}

  public addRoom(roomName: number, maxPlayers: number): void {
    const roomId: number = new Date().getUTCMilliseconds();
    this.db.object('/rooms/room' + roomId).update({
      name: roomName,
      maxPlayers: maxPlayers || 2,
      id: roomId,
      // counter: 0,
      masterId: this._myService.blackJackData.userId,
      deck: this._myService.createDeck(),
      players: {},
      gameInProgress: false
    });
    this.router.navigate(['/playroom', roomId]);
  }

  public deleteRoom(roomId: number): void {
    this.db.list('/rooms').remove('room' + roomId);
  }

  ngOnInit() {
    this._myService.getRoomData().subscribe((rooms: TRoom[]) => {
      this.rooms = rooms;
      this.rooms.forEach((myroom: TRoom) => {myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0; });
    });
  }
}
