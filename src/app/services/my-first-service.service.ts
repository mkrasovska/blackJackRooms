import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {
  public randomUserNumber: number = this.getRandom();

  public blackJackData: TLocalData = this.getMyData() || {
    userName: `Kot${this.randomUserNumber}`,
    userId: this.randomUserNumber
  };
  public roomId: number = 0;
  public myBotsId: number[] = [
    this.blackJackData.userId + 100000,
    this.blackJackData.userId + 200000,
    this.blackJackData.userId + 300000
  ];

  public constructor(public db: AngularFireDatabase) {}

  public getRoomData(): Observable<{}[]> {
    return this.db.list('rooms').valueChanges();
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
    // debugger;
    this.db.object('/rooms/room' + roomId + `/players/${player.id}`).update(player);
  }

  public Player(name: string, isBot: boolean, id: number): TPlayer {
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
    const nicks: string[] = ['крот', 'бот', 'кот'];
    const character: string[] = ['жёваный', 'нёжеваный', 'недожёваный', 'просто'];
    const nickNames: string[] = [];
    nicks.forEach((name: string) => {
      character.forEach((char: string) => {
        nickNames.push(`${char} ${name}`);
       });
    });
    const randomName: string = nickNames[Math.ceil(Math.random() * nickNames.length)];
    // console.log(nickNames);
    return randomName;
  }

  // public nameGenerator(): string {
  //   let nicks = ['крот', 'бот', 'кот'];
  //   let character = ['жёваный', 'нёжеваный', 'недожёваный', 'просто'];
  //   let nickNames = [];
  //   nicks.forEach(name => {
  //     character.forEach(char => { nickNames.push(`${char} ${name}`) });
  //   });

  //   (nickNames);
  // }

  // public updatePlayers(players: TPlayer[], roomId: number): void {
  //   this.db.object('/rooms/room' + roomId + `/players`).update(players);
  // }

  // public sayReady(playerId: number, roomId: number): void {
  //   let isReady = {[playerId] : true};
  //   this.db.object('/rooms/room' + roomId + `/ready`).update(isReady);
  //   console.log('updated');
  // }

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
  if (players.every((player: TPlayer) => player.id === this.blackJackData.userId || player.isBot)) {
    this.db.object('/rooms/room' + roomId).remove();
   }
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

  public evaluateWinner(players: TPlayer[]): TPlayer {
    const winner: TPlayer = players.reduce((win: TPlayer, player: TPlayer) => {
      if (player.score > win.score && player.score <= 21) {
        win = player;
      }
      return win;
    }, this.Player('', false, 1));

    return winner;
  }
}
