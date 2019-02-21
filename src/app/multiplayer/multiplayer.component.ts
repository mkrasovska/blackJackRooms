import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
  // host: { 'window:beforeunload': 'doOnUnload' }
})
export class MultiplayerComponent implements OnInit, OnDestroy {
  public thisRoom: TRoom;
  public players: TPlayer[] = [];
  public gameInProgress: boolean = false;
  public allMessages: string[] = [];
  public messageText: string;
  public subRoom: Subscription;
  public myIndex: number;
  public playersObj: {} = {};
  public records: {} = {};
  public blackJackData: TLocalData = this._myService.getMyData() || this._myService.randomUserData;
  // public turnTimer;

  private _destroy$$: Subject<void> = new Subject();

  private _myDeck: TCard[];

  public constructor(private _myService: MyFirstServiceService) {}

  public ngOnInit(): void {
    this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
    this._myService
      .getRecords()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((records: {}) => {
        this.records = records || {};
      });

    this.subRoom = this._myService
      .getThisRoomData(this._myService.roomId)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((room: TRoom) => {
        this.thisRoom = room;
        this._myDeck = room.deck;
        this.gameInProgress = this.thisRoom.gameInProgress;
        this.allMessages = room.messages ? room.messages : [];
        if (room.players) {
          this.players = Object.values(room.players);
          this.playersObj = room.players;
        }
        this.myIndex = this.players.findIndex(
          (player: TPlayer) => player.id === this.blackJackData.userId
        );
      });
  }

  public ngOnDestroy(): void {
    this._findNewMaster(this.thisRoom);
    this._destroy$$.next();
  }

  public createBots(botsNumber: number): TPlayer[] {
    const bots: TPlayer[] = [];
    let id: number = this._myService.getRandom();
    for (let i: number = 0; i < botsNumber; i++, id += 100000) {
      const newBot: TPlayer = this._myService.createPlayer(this._myService.randomNick(), true, id);
      bots.push(newBot);
    }
    return bots;
  }

  // public blackJackInit(): void {
  //   this.startNewGame();
  // }

  public startNewGame(): void {
    if (this.players.length <= 1) {
      alert (`At least 2 players should be in the room to start the game.
       Please wait for other players or add bots.`);
       return;
    }
    this._myService.changeInProgress(true, this._myService.roomId);
    this._myDeck = this._myService.shuffleDeck(this._myService.createDeck());
    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._clearBoard();
    this.players.forEach((player: TPlayer) => {
      player.cards = [];
      player.isFinished = false;
      player.isWinner = false;
      player.score = 0;
      player.isMyTurn = false;
      player.ready = true;
    });

    this.players[0].isMyTurn = true;

    if (this.blackJackData.userId === this.thisRoom.masterId) {
      this.players.forEach((player: TPlayer) => {
        this._takeNewCard(player);
        this._myService.updatePlayer(player, this._myService.roomId);
      });
    }

    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._myService.removeMessages(this._myService.roomId);
  }

  public stopGame(): void {
    this.players[this.myIndex].isFinished = true;
    this.continueGame();
  }

  public switchTurn(thisIndex: number): number {
    let nextIndex: number = this.findNextIndex(thisIndex);

    if (!this.players.every((player: TPlayer) => player.isFinished)) {
      while (this.players[nextIndex].isFinished === true || this.players[nextIndex].isBot) {
        if (this.players[nextIndex].isBot) {
          this.nextTurn(this.players[nextIndex]);
        }
        nextIndex = this.findNextIndex(nextIndex);
        if (
          nextIndex === thisIndex &&
          !this.players.some((player: TPlayer) => player.isBot && !player.isFinished)
        ) {
          break;
        }
      }
    }

    this.players[thisIndex].isMyTurn = false;
    this.players[nextIndex].isMyTurn = true;
    return nextIndex;
  }

  public continueGame(): void {
    this.nextTurn(this.players[this.myIndex]);

    const nextIndex: number = this.switchTurn(this.myIndex);

    // clearTimeout(this.turnTimer);
    // this.turnTimer = setTimeout(() => {this.players[nextIndex].isFinished=true;
    // const nextNextIndex: number = this.switchTurn(nextIndex);
    // this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
    // this._myService.updatePlayer(this.players[nextNextIndex], this._myService.roomId);
    // }, 60000);

    this._myService.updatePlayer(this.players[this.myIndex], this._myService.roomId);
    this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
  }

  public findNextIndex(myNumber: number): number {
    return myNumber < this.players.length - 1 ? myNumber + 1 : 0;
  }

  public nextTurn(player: TPlayer): void {
    if (player.isBot && player.score >= 15 && !player.isFinished) {
      player.isFinished = true;
    }

    if (!player.isFinished) {
      if (!player.cards) {
        player.cards = [];
      }
      this._takeNewCard(player);

      if (player.score > 21) {
        player.isFinished = true;
        let bustCounter: number = 0;
        let potentialWinner: TPlayer;
        this.players.forEach((_player: TPlayer) => {
          if (_player.score <= 21) {
            potentialWinner = _player;
          } else {
            bustCounter++;
          }
        });
        if (bustCounter === this.players.length - 1) {
          this._finishGame(potentialWinner);
        }
      }

      if (player.score === 21) {
        this._finishGame(player);
      }
    }

    this._myService.updatePlayer(player, this._myService.roomId);
    this._myService.updateDeck(this._myDeck, this._myService.roomId);

    if (this.players.every((_player: TPlayer) => _player.isFinished)) {
      const winners: TPlayer[] = this._myService.evaluateWinner(this.players);
      // clearTimeout(this.turnTimer);
      winners.forEach((winner: TPlayer) => {
        winner.isWinner = true;
        this._myService.updatePlayer(winner, this._myService.roomId);
      });

      this._myService.changeInProgress(false, this._myService.roomId);
      this._myService.updateRecords(this.players, this.records);
      this._myService.updatePlayer(player, this._myService.roomId);
    }
  }

  private _clearBoard(): void {
    this.allMessages = [];
    this._myService.updateMessages(this.allMessages, this._myService.roomId);
  }

  private _takeNewCard(player: TPlayer): TCard {
    const takenCard: TCard = this._myDeck.pop();
    if (!player.cards) {
      player.cards = [];
    }
    player.cards.push(takenCard);
    player.score = this._myService.scoreSum(player);

    return takenCard;
  }

  private _finishGame(winner: TPlayer): void {
    winner.isWinner = true;
    this.players.forEach((player: TPlayer) => {
      player.isFinished = true;
      this._myService.updatePlayer(player, this._myService.roomId);
    });
  }

  // private _writeMessage(message: string): void {
  //   this.messageText = message;
  //   this.allMessages.push(message);
  //   this._myService.updateMessages(this.allMessages, this._myService.roomId);
  // }

  private _findNewMaster(room: TRoom): void {
    if (room.masterId === this.blackJackData.userId) {
      let nextMasterIndex: number = this.findNextIndex(this.myIndex);

      while (this.players[nextMasterIndex].isBot) {
        nextMasterIndex = this.findNextIndex(nextMasterIndex);
        if (nextMasterIndex === this.myIndex) {
          break;
        }
      }

      const nextMasterId: number = this.players[nextMasterIndex].id;
      this._myService.changeMaster(nextMasterId, this.thisRoom.id);
    }
  }
}
