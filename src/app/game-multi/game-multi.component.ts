import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-game-multi',
  templateUrl: './game-multi.component.html',
  styleUrls: ['./game-multi.component.css']
})
export class GameMultiComponent implements OnInit {
  public rooms: TRoom[] = [];

  // public router: Router;

  public constructor(private _myService: MyFirstServiceService, public db: AngularFireDatabase) {
  }

  public addRoom(roomName: number): void {
    const roomId: number = new Date().getUTCMilliseconds();
    const blackJackData: TLocalData = this._myService.getMyData();
    const masterId: number = blackJackData.userId;
    this.db.object('/rooms/room' + roomId).update({
      name: roomName,
      id: roomId,
      counter: 0,
      masterId,
      deck: this._myService.createDeck(),
      players: {},
      gameInProgress: false
    });
    this.db.object('/rooms/room' + roomId + `/players/${masterId}`).update({
      id: masterId,
      isBot: false,
      name: 'Master',
      cards: [],
      isWinner: false,
      isFinished: false,
      score: 0
    });
  }

  public deleteRoom(roomId: number): void {
    this.db.list('/rooms').remove('room' + roomId);
  }

  // public goToRoom(roomID: number): void {
  //   this.router.navigate(['/room', roomID]);
  // }

  ngOnInit() {
     this._myService.getRoomData()
      .subscribe((rooms: TRoom[]) => {
        this.rooms = rooms;
      });
  }
}
