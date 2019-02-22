import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public randomUserData: Partial<TPlayer> = {
    name: this._randomNickHuman(),
    id: this._getRandom()
  };

  public constructor() {}

  public getCurrentUser(): Partial<TPlayer> {
    const blackJackData: Partial<TPlayer> = JSON.parse(localStorage.getItem('blackJackData'));

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

  private _getRandom(): number {
    return new Date().getTime();
  }
}
