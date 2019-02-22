import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public blackJackData: Partial<TLocalData> = this._userService.getCurrentUser() || {};
  public userName: string = this.blackJackData.userName;

  public constructor(private _userService: UserService) {}

  public saveUserName(name: string): void {
    const userId: number = new Date().getTime();
    this.blackJackData.userName = name;

    if (!this.blackJackData.userId) {
      this.blackJackData.userId = userId;
    }

    this.userName = name;
    const stringblackJackData: string = JSON.stringify(this.blackJackData);
    localStorage.setItem('blackJackData', stringblackJackData);
  }
}
