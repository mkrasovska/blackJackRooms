import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit, OnDestroy {
  public players: TPlayer[] = this.createPlayers(1, 1);
  public gameInProgress: boolean = false;
  public allMessages: string[] = [];
  public messageText: string;
  public subRoom: Subscription;
  public isReady: {} = {};

  private _newDeck: TCard[] = this._myService.createDeck();
  private _myDeck: TCard[] = this._myService.shuffleDeck(this._newDeck);

  public constructor(private _myService: MyFirstServiceService) {}

  public ngOnInit() {
    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this.players.forEach((player: TPlayer) =>
      this._myService.updatePlayer(player, this._myService.roomId)
    );
    this.subRoom = this._myService
      .getThisRoomData(this._myService.roomId)
      .subscribe((room: TRoom) => {
        this._myDeck = room.deck;
        this.allMessages = room.messages ? room.messages : [];
        // this.isReady = room.ready;
        // console.log(this.isReady);
        // console.log(room.players ? Object.values(room.players) : 'oops!');
        // console.log(this._myDeck);
        if (room.players) {
          this.players = Object.values(room.players);
          // const isActive: boolean = this.players.every((player: TPlayer) => player.ready);
          // console.log(isActive);
        }
      });
  }

  ngOnDestroy() {
    this.subRoom.unsubscribe();
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
      ready: false,
      isMyTurn: false
    };
    return player;
  }

  public createPlayers(playersNumber: number, humansNumber: number): TPlayer[] {
    const players: TPlayer[] = [];
    let id: number = this._myService.blackJackData.userId;
    for (let i: number = 0; i < playersNumber; i++, id += 100000) {
      const isBot: boolean = i < humansNumber ? false : true;
      const newPlayer: TPlayer = this.Player(
        `${this._myService.blackJackData.userName}${i}`,
        isBot,
        id
      );
      players.push(newPlayer);
    }
    return players;
  }

  public blackJackInit(): void {
    this.gameInProgress = true;
    this.startNewGame();
  }

  public startNewGame(): void {
    this.allMessages = [];
    // this._refillDeck();
    // this._myDeck = this._myService.shuffleDeck(this._myDeck);
    this._myDeck = this._myService.shuffleDeck(this._newDeck);
    console.log(this._myDeck);
    this._clearBoard();
    this.players.forEach((player: TPlayer) => {
      player.cards = [];
      player.isFinished = false;
      player.isWinner = false;
      player.score = 0;
      // player.ready = false;
      if (player.id === this._myService.blackJackData.userId) {
        player.ready = true;
      }

    });
    console.log(this.players);
    console.log(this._myService.blackJackData.userId);
    // this.players.forEach((player: TPlayer) => this._takeNewCard(player));

    // this.players.forEach((player: TPlayer) => {
    //   let takenCard: TCard;
    //   if (player.id === this._myService.blackJackData.userId) {
    //   takenCard = this._takeNewCard(player);
    //     this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);
        // this._myService.updatePlayer(player, this._myService.roomId);
    //   }
    //  });
    this.players[0].isMyTurn = true;
    this.players.forEach((player: TPlayer) => {
      this._myService.updatePlayer(player, this._myService.roomId);
      // if (player.id === this._myService.blackJackData.userId) {
      //   player.ready = true;
      // }
    });
    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._myService.removeMessages(this._myService.roomId);
    console.log(this.players);
    // this._myService.sayReady(this._myService.blackJackData.userId, this._myService.roomId);
    // console.log(this._myDeck);

  }

  public stopGame(): void {
    this.players[0].isFinished = true;
    this._writeMessage(`${this.players[0].name} stopped the game`);
    this.nextRound();
  }

  public nextRound(): void {
    this.players.forEach((player: TPlayer, index: number) => {
      if (player.id === this._myService.blackJackData.userId) {
        if (!player.isFinished) {
          this.nextTurn(player);
          // const i: number = (index < this.players.length - 1 ) ? index + 1 : 0;
          // this.players[i].isMyTurn = true;
        }
      }
    });

    if (this.players.every((player: TPlayer) => player.isFinished)) {
      if (!this.players.some((player: TPlayer) => player.isWinner)) {
        const winner: TPlayer = this._myService.evaluateWinner(this.players);
        this._writeMessage(`${winner.name} has won`);
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
      if (!player.cards) {
        player.cards = [];
      }
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

    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._myService.updatePlayer(player, this._myService.roomId);

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
    this.players.forEach((player: TPlayer) => {
      this._myDeck = this._myDeck.concat(player.cards);
    });
  }

  private _finishGame(winner: TPlayer): void {
    this.players.forEach((player: TPlayer) => (player.isFinished = true));
    winner.isWinner = true;
  }

  private _writeMessage(message: string): void {
    this.messageText = message;
    this.allMessages.push(message);
    this._myService.updateMessages(this.allMessages, this._myService.roomId);
  }
}
