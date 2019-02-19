import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {
  public randomUserData: TLocalData = {
    userName: this.randomNickHuman(),
    userId: this.getRandom()
  };

  public blackJackData: TLocalData = this.getMyData() || this.randomUserData;
  public roomId: number = 0;

  public constructor(public db: AngularFireDatabase, private router: Router) {}

  public getRoomData(): Observable<{}[]> {
    return this.db.list('rooms').valueChanges();
  }

  public getRecords(): Observable<{}> {
    return this.db.object('records').valueChanges();
  }

  public getRandom(): number {
    return Math.ceil(Math.random() * 1000);
  }

  public getThisRoomData(id: number): Observable<{}> {
    return this.db.object('rooms/room' + id).valueChanges();
  }

  public removePlayer(playerId: number, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/players/${playerId}`).remove();
  }

  public changeInProgress(gameInProgress: boolean, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/gameInProgress`).set(gameInProgress);
  }

  public changeMaxPlayers(newMaxPlayers: number, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/maxPlayers`).set(newMaxPlayers);
  }

  public changeMaster(newMaterId: number, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/masterId`).set(newMaterId);
  }

  public updatePlayer(player: TPlayer, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/players/${player.id}`).update(player);
  }

  public createPlayer(name: string, isBot: boolean, id: number): TPlayer {
    const player: TPlayer = {
      name,
      isBot,
      id,
      isWinner: false,
      isFinished: false,
      score: 0,
      cards: [],
      ready: true,
      isMyTurn: false
    };
    return player;
  }

  public randomNick(): string {
    const nicks: string[] = ['Крот', 'Бот', 'Кот'];
    const character: string[] = ['Жёваный', 'Нежёваный', 'Недожёваный'];
    const nickNames: string[] = [];
    nicks.forEach((name: string) => {
      character.forEach((char: string) => {
        nickNames.push(`${char} ${name}`);
      });
    });
    const randomName: string = nickNames[Math.floor(Math.random() * nickNames.length)];
    return randomName;
  }

  public randomNickHuman(): string {
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

  public updateDeck(deck: TCard[], roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/deck`).set(deck);
  }

  public updateMessages(messages: string[], roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/messages`).update(messages);
  }

  public removeMessages(roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/messages`).remove();
  }

  public deleteEmptyRoom(players: TPlayer[], roomId: number): void {
    if (
      players.every((player: TPlayer) => player.id === this.blackJackData.userId || player.isBot)
    ) {
      this.db.object('/rooms/room' + roomId).remove();
    }
  }

  public updateRecords(players: TPlayer[], records: {}): void {
    players.forEach((player: TPlayer) => {

      if (!player.isBot) {
        records[player.id] = records[player.id]
          ? {
              victories: records[player.id].victories,
              games: records[player.id].games + 1,
              name: player.name,
              id: player.id
            }
          : {
              victories: 0,
              games: 1,
              name: player.name,
              id: player.id
            };

        if (player.isWinner) {
          records[player.id].victories++;
        }

        this.db.object(`/records`).update(records);
      }
    });
  }

  public scoreSum(player: TPlayer): number {
    let sum: number = 0;

    player.cards.forEach((card: TCard) => {
      sum += card.value;
    });

    return sum;
  }

  public getMyData(): TLocalData {
    const blackJackData: TLocalData = JSON.parse(localStorage.getItem('blackJackData'));

    return blackJackData;
  }

  public createDeck(): TCard[] {
    const newDeck: TCard[] = [];
    const suits: { name: string; symbol: string }[] = [
      { name: 'club', symbol: '♣' },
      { name: 'spade', symbol: '♠' },
      { name: 'diamond', symbol: '♦' },
      { name: 'heart', symbol: '♥' }
    ];
    const cards: { name: string; value: number }[] = [
      { name: '6', value: 6 },
      { name: '7', value: 7 },
      { name: '8', value: 8 },
      { name: '9', value: 9 },
      { name: '10', value: 10 },
      { name: 'J', value: 2 },
      { name: 'Q', value: 3 },
      { name: 'K', value: 4 },
      { name: 'A', value: 11 }
    ];

    suits.forEach((suit: { name: string; symbol: string }) => {
      cards.forEach((card: { name: string; value: number }) => {
        const newCardObj: TCard = {
          name: card.name,
          suit: suit.name,
          symbol: suit.symbol,
          value: card.value,
          face: `../assets/img/${suit.name}_${card.name}.svg`,
          back: `../assets/img/back.png`
        };

        newDeck.push(newCardObj);
      });
    });

    return newDeck;
  }

  public shuffleDeck(myDeck: TCard[]): TCard[] {
    myDeck.forEach((card: TCard, i: number, deck: TCard[]) => {
      const randomNumber: number = Math.floor(Math.random() * myDeck.length);
      const changeCard: TCard = card;
      deck[i] = deck[randomNumber];
      deck[randomNumber] = changeCard;
    });

    return myDeck;
  }

  public evaluateWinner(players: TPlayer[]): TPlayer[] {
    const winner: TPlayer = players.reduce((win: TPlayer, player: TPlayer) => {

      if (player.score > win.score && player.score <= 21) {
        win = player;
      }

      return win;
    }, this.createPlayer('', false, 1));
    const winners: TPlayer[] = [winner];
    players.forEach((player: TPlayer) => {
      if (player.score === winner.score) {
        winners.push(player);
      }
    });

    return winners;
  }

  public addRoom(roomName: string, maxPlayers: number): void {
    const roomId: number = new Date().getUTCMilliseconds();
    const blackJackData: TLocalData = this.getMyData() || this.randomUserData;
    this.db.object('/rooms/room' + roomId).update({
      name: roomName,
      maxPlayers: maxPlayers || 2,
      id: roomId,
      masterId: blackJackData.userId,
      deck: this.createDeck(),
      players: {},
      gameInProgress: false
    });
    this.router.navigate(['/playroom', roomId]);
  }

  public addBot(): void {
    const newBot: TPlayer = this.createPlayer(
      this.randomNick(),
      true,
      this.getRandom() + 100000
    );
    this.updatePlayer(newBot, this.roomId);
  }
}
