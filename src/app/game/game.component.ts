import { Component } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public players: TPlayer[] = this.createPlayers(3, 1);
  public gameInProgress: boolean = false;
  public allMessages: string[] = [];
  public messageText: string;

  private _newDeck: TCard[] = this._myService.createDeck();
  private _myDeck: TCard[] = this._myService.shuffleDeck(this._newDeck);

  public constructor(private _myService: MyFirstServiceService) {}

  public Player(name: string, isBot: boolean, id: number): TPlayer {
    const player: TPlayer = {
      name,
      isBot,
      id,
      isWinner: false,
      isFinished: false,
      score: 0,
      cards: [],
      ready: false,
      isMyTurn: false
    };
    return player;
  }

  public createPlayers(playersNumber: number, humansNumber: number): TPlayer[] {
    const players: TPlayer[] = [];
    let id: number = 0;
    for (let i: number = 0; i < playersNumber; i++, id++) {
      const isBot: boolean = i < humansNumber ? false : true;
      const newPlayer: TPlayer = this.Player(`Vasya${i}`, isBot, id);
      players.push(newPlayer);
    }
    return players;
  }

  public blackJackInit(): void {
    this.gameInProgress = true;
    this.startNewGame();
  }

  public startNewGame(): void {
    this._refillDeck();
    console.log(this._myDeck);
    this._myDeck = this._myService.shuffleDeck(this._myDeck);
    this._clearBoard();
    this.players.forEach((player: TPlayer) => {
      player.cards = [];
      player.isFinished = false;
      player.isWinner = false;
      player.score = 0;
    });
    this.players.forEach((player: TPlayer) => this._takeNewCard(player));
    console.log(this._myDeck);
  }

  public stopGame(): void {
    this.players[0].isFinished = true;
    this._writeMessage(`${this.players[0].name} stopped the game`);
    this.nextRound();
  }

  public nextRound(): void {
    this.players.forEach((player: TPlayer) => {
      if (!player.isFinished) {
        this.nextTurn(player);
      }
    });
    if (this.players.every((player: TPlayer) => player.isFinished)) {
      if (!this.players.some((player: TPlayer) => player.isWinner)) {
        const winners: TPlayer[] = this._myService.evaluateWinner(this.players);
        // this._writeMessage(`${winner.name} has won`);
      }
      this._showNewGameButton();
    }
  }

  public nextTurn(player: TPlayer): void {

    if (player.isBot && player.score >= 15) {
      player.isFinished = true;
      this._writeMessage(`${player.name} stopped the game`);
    }

    if (!player.isFinished) {
    const takenCard: TCard = this._takeNewCard(player);
    this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);

    if (player.score > 21) {
      player.isFinished = true;
      this._writeMessage(`${player.name} has too much! Looser!`);
    }

    if (player.score === 21) {
      this._finishGame(player);
      this._writeMessage(`${player.name} has won! Cheers!`);
    }
  }
  }

  private _clearBoard(): void {
    this.gameInProgress = true;
    this.allMessages = [];
  }

  private _takeNewCard(player: TPlayer): TCard {
    const takenCard: TCard = this._myDeck.pop();
    player.cards.push(takenCard);
    player.score = this._myService.scoreSum(player);

    return takenCard;
  }

  private _showNewGameButton(): void {
    this.gameInProgress = false;
  }

  private _refillDeck(): void {
    this.players.forEach((player: TPlayer) => {this._myDeck = this._myDeck.concat(player.cards)});
  }

  private _finishGame(winner: TPlayer): void {
    this.players.forEach((player: TPlayer) => (player.isFinished = true));
    winner.isWinner = true;
  }

  private _writeMessage(message: string): void {
    this.messageText = message;
    this.allMessages.push(message);
  }
}
