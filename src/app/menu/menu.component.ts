import { Component } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public _myService: MyFirstServiceService, public router: Router) {
  }

  public addRoom(roomName: string, maxPlayers: number): void {
    this._myService.addRoom(roomName, maxPlayers);
  }
}
