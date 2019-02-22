import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public randomUserData: TLocalData = {
    userName: this._randomNickHuman(),
    userId: this.getRandom()
  };
  public blackJackData: TLocalData = this.getCurrentUser() || this.randomUserData;
  public roomId: number = 0;

  public constructor() {}

  public getRandom(): number {
    return new Date().getTime();
  }

  public getCurrentUser(): TLocalData {
    const blackJackData: TLocalData = JSON.parse(localStorage.getItem('blackJackData'));

    return blackJackData;
  }


  private _randomNickHuman(): string {
    const nickNames: string[] = [
      'Штирлиц',
      'Бабайка',
      'Балалайка',
      'Cool Hacker',
      'Чиполино',
      'Шапокляк',
      'Сепулька'
    ];
    const randomName: string = nickNames[Math.ceil(Math.random() * nickNames.length)];
    return randomName;
  }
}
