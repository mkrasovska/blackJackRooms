import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public blackJackData: TLocalData;
  public editName: boolean = false;

  public constructor(
    private _userService: UserService,
    private _dataBaseService: DataBaseService,
    public router: Router
  ) {}

  public setNewName(event: KeyboardEvent): void {
    if (event.key !== 'Enter') {
      return;
    }
    localStorage.setItem('blackJackData', JSON.stringify(this.blackJackData));
    this.editName = false;
  }

  public ngOnInit(): void {
    this.blackJackData = this._userService.getCurrentUser() || this._userService.randomUserData;
  }

  public addRoom(): void {
    this._dataBaseService.addRoom('Single', 2, true);
  }
}
