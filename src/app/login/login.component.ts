import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public blackJackData: Partial<TLocalData> = this._myService.getMyData() || {};
  public userName: string = this.blackJackData.userName;

  public constructor(private _myService: MyFirstServiceService) {}

  public saveUserName(name: string): void {
    const userId: number = new Date().getUTCMilliseconds();
    this.blackJackData.userName = name;

    if (!this.blackJackData.userId) {
      this.blackJackData.userId = userId;
    }

    this.userName = name;
    const stringblackJackData: string = JSON.stringify(this.blackJackData);
    localStorage.setItem('blackJackData', stringblackJackData);
  }

  ngOnInit() {
  }
}
