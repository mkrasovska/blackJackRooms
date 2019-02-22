import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  public constructor() {}

  public checkForLastPlayer(players: TPlayer[], userId: number): boolean {
    return players.every((player: TPlayer) => player.id === userId || player.isBot);
  }

  public checkMaxPlayers(room: TRoom, userId: number): boolean {
    const players: TPlayer[] = room.players ? Object.values(room.players) : [];
    return room.maxPlayers <= players.length && !room.players[userId];
  }

  public checkInProgress(room: TRoom, userId: number): boolean {
    return room.gameInProgress && !room.players[userId];
  }

  public checkIfSingle(room: TRoom, userId: number): boolean {
    return room.singleRoom && room.masterId !== userId;
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

  public scoreSum(player: TPlayer): number {
    let sum: number = 0;

    player.cards.forEach((card: TCard) => {
      sum += card.value;
    });

    return sum;
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

  public createBot(): TPlayer {
    const newBot: TPlayer = this.createPlayer(
      this._randomNick(),
      true,
      this._getRandom() + 9990000000000000
    );
    return newBot;
  }

  private _getRandom(): number {
    return new Date().getTime();
  }

  private _randomNick(): string {
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
}
