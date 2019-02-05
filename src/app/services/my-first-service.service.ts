import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {
  public blackJackData: TLocalData = this.getMyData();
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

  public getThisRoomData(id: number): Observable<{}> {
    return this.db.object('rooms/room' + id).valueChanges();
  }

  public removePlayer(playerId: number, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/players/${playerId}`).remove();
  }

  public updatePlayer(player: TPlayer, roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/players/${player.id}`).update(player);
  }

  public updateDeck(deck: TCard[], roomId: number): void {
    this.db.object('/rooms/room' + roomId + `/deck`).set(deck);
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
    }, players[1]);

    return winner;
  }
}