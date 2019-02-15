import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFirstServiceService } from './../services/my-first-service.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

// import { getPlayers } from '@angular/core/src/render3/players';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
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

  private _destroy$$: Subject<void> = new Subject();

  // private _newDeck: TCard[] = this._myService.createDeck();
  // private _myDeck: TCard[] = this._myService.shuffleDeck(this._newDeck);
  private _myDeck: TCard[];

  public constructor(private _myService: MyFirstServiceService) {}

  public ngOnInit() {
    // this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
    // this.players.forEach((player: TPlayer) =>
    //   this._myService.updatePlayer(player, this._myService.roomId)
    // );
    this._myService
      .getRecords()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((records: {}) => {
        this.records = records || {};
        console.log(`subscribe`);
        console.log(this.records);
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
        // this.gameInProgress = this.players
        //   ? Object.keys(this.players).length === this.thisRoom.maxPlayers &&
        //     this.players.every((player: TPlayer) => player.ready) &&
        //     !this.players.every((player: TPlayer) => player.isFinished)
        //   : false;
        // if (
        //   this.gameInProgress &&
        //   this.players &&
        //   this.players.every((player: TPlayer) => player.score === 0)
        // ) {
        //   this.players[0].isMyTurn = true;
        //   this._myService.updatePlayer(this.players[0], this.thisRoom.id);
        // }
        // this._myService.changeInProgress(this.gameInProgress, this._myService.roomId);
        this.myIndex = this.players.findIndex(
          (player: TPlayer) => player.id === this.blackJackData.userId
        );
      });
  }

  ngOnDestroy() {
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

  public blackJackInit(): void {
    // if (numberOfBots) {
    //   this.addBots(numberOfBots);
    // }
    // this._myService.changeMaxPlayers(this.players.length, this.thisRoom.id);
    this.startNewGame();
  }

  // public addBots(numberOfBots: number): TPlayer[] {
  //   const bots: TPlayer[] = this.createBots(numberOfBots);
  //   bots.forEach((bot: TPlayer) => {
  //     this._myService.updatePlayer(bot, this.thisRoom.id);
  //     this.players.push(bot);
  //   });
  //   return bots;
  // }

  public startNewGame(): void {
    this._myService.changeInProgress(true, this._myService.roomId);
    this._myDeck = this._myService.shuffleDeck(this._myService.createDeck());
    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    console.log(this._myDeck);
    // console.log(this._newDeck);
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
        const takenCard: TCard = this._takeNewCard(player);
        // this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);
        this._myService.updatePlayer(player, this._myService.roomId);
      });
    }

    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._myService.removeMessages(this._myService.roomId);
  }

  public stopGame(): void {
    // if (!this.players[this.myIndex].isFinished) {
    //   this._writeMessage(`${this.blackJackData.userName} stopped the game`);
    // }
    this.players[this.myIndex].isFinished = true;
    this.continueGame();
  }

  public switchTurn(): number {
    let nextIndex: number = this.findNextIndex(this.myIndex);

    if (!this.players.every((player: TPlayer) => player.isFinished)) {
      while (this.players[nextIndex].isFinished === true || this.players[nextIndex].isBot) {
        if (this.players[nextIndex].isBot) {
          this.nextTurn(this.players[nextIndex]);
          // this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
        }
        nextIndex = this.findNextIndex(nextIndex);
        if (nextIndex === this.myIndex && !this.players.some((player: TPlayer) => player.isBot && !player.isFinished)) {
          break;
        }
      }
    }

    this.players[this.myIndex].isMyTurn = false;
    this.players[nextIndex].isMyTurn = true;
    return nextIndex;
  }

  public continueGame(): void {
    this.nextTurn(this.players[this.myIndex]);

    const nextIndex: number = this.switchTurn();

    this._myService.updateDeck(this._myDeck, this._myService.roomId);
    this._myService.updatePlayer(this.players[this.myIndex], this._myService.roomId);
    this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
  }

  public findNextIndex(myNumber: number): number {
    return myNumber < this.players.length - 1 ? myNumber + 1 : 0;
  }

  public nextTurn(player: TPlayer): void {
    if (player.isBot && player.score >= 15 && !player.isFinished) {
      // this._writeMessage(`${player.name} stopped the game`);
      player.isFinished = true;
    }

    if (!player.isFinished) {
      if (!player.cards) {
        player.cards = [];
      }
      const takenCard: TCard = this._takeNewCard(player);
      // this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);

      if (player.score > 21) {
        player.isFinished = true;
        this._writeMessage(`${player.name} has too much! Looser!`);
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

    if (this.players.every((_player: TPlayer) => _player.isFinished)) {
      const winner: TPlayer = this._myService.evaluateWinner(this.players);
      this._myService.changeInProgress(false, this._myService.roomId);
      this._writeMessage(`${winner.name} has won`);
      this._myService.updateRecords(this.players, this.records);
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

  private _writeMessage(message: string): void {
    this.messageText = message;
    this.allMessages.push(message);
    this._myService.updateMessages(this.allMessages, this._myService.roomId);
  }

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
      console.log(this.players);
    }
  }
}
