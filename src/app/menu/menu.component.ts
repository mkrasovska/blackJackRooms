import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public blackJackData: TLocalData;
  public editName: boolean = false;

  public constructor(public _myService: MyFirstServiceService, public router: Router) {}

  public setNewName(event: KeyboardEvent): void {
    // const stringblackJackData: string = JSON.stringify(this.blackJackData);
    if (event.key !== 'Enter') {
      return;
    }
    localStorage.setItem('blackJackData', JSON.stringify(this.blackJackData));
    this.editName = false;
  }

  public ngOnInit(): void {
    this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
  }

  public addRoom(): void {
    this._myService.addRoom('Single', 2, true);
  }
}
