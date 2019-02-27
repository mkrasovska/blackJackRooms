import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, pluck, switchMap, tap, filter } from 'rxjs/operators';

import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  public thisRoom: TRoom;
  public blackJackData: Partial<TPlayer>;
  public players: TPlayer[];
  public isRoomAccessible: boolean = false;


  private _destroy$$: Subject<void> = new Subject();
  private _myDeck: TCard[];
  private _myIndex: number;
  private _topScores: {};
  private _turnTimer: number;

  public constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _dataBaseService: DataBaseService,
    private _gameService: GameService,
    private _router: Router
  ) {}

  @HostListener('window:beforeunload', ['$event'])
  public onBeforeClose(e: Event): boolean {
    e.returnValue = false;
    return false;
  }

  @HostListener('window:unload', ['$event'])
  public onUnload(e: Event): boolean {

    if (this.players[this._myIndex].isMyTurn) {
      const nextIndex: number = this._switchTurn();
      this.updateTurn(this._myIndex, nextIndex);
      clearTimeout(this._turnTimer);
      this._turnTimer = 0;
    }

    this._findNewMaster(this.thisRoom);
    this._dataBaseService.removePlayer(this.blackJackData.id, this.thisRoom.id);

    if (
      this.thisRoom &&
      this._gameService.checkForLastPlayer(this.players, this.blackJackData.id)
    ) {
      this._dataBaseService.deleteRoom(this.thisRoom.id);
    }

    return false;
  }

  public ngOnInit(): void {
    if (this._userService.getCurrentUser()) {
      this.blackJackData = this._userService.getCurrentUser();
    } else {
      this.blackJackData = this._userService.randomUserData;
      const stringblackJackData: string = JSON.stringify(this.blackJackData);
      localStorage.setItem('blackJackData', stringblackJackData);
    }

    this._dataBaseService
      .getTopScores()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((topScores: {}) => {
        this._topScores = topScores || {};
      });

    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom(roomId)),
        tap((room: TRoom) => {
          if (!room) {
            this._router.navigate(['closed-room']);
          } else {
            this.thisRoom = room;
            this.players = room.players ? Object.values(room.players) : [];
            this._myDeck = room.deck;
            this._myIndex = this.players.findIndex(
              (player: TPlayer) => player.id === this.blackJackData.id
            );
            if (this.thisRoom.gameInProgress && this.players[this._myIndex].isMyTurn && !this._turnTimer && !this.players[this._myIndex].isFinished) {
                this._turnTimer = setTimeout(() => {
                this.players[this._myIndex].isFinished = true;
                this.continueGame();
              }, 10000);
            }
          }
        }),
        filter(Boolean),
        tap((room: TRoom) => {
          if (
            this._gameService.checkInProgress(room, this.blackJackData.id) ||
            this._gameService.checkMaxPlayers(room, this.blackJackData.id) ||
            this._gameService.checkIfSingle(room, this.blackJackData.id)
          ) {
            this._router.navigate(['closed-room']);
          }
        }),
        filter(
          (room: TRoom) =>
            !this._gameService.checkInProgress(room, this.blackJackData.id) &&
            !this._gameService.checkMaxPlayers(room, this.blackJackData.id) &&
            !this._gameService.checkIfSingle(room, this.blackJackData.id)
        ),
        tap(() => {
          this.isRoomAccessible = true;
        }),
        filter((room: TRoom) => {
          return room.players ? !room.players[this.blackJackData.id] : true;
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe((room: TRoom) => {
        const newPlayer: TPlayer = this._gameService.createPlayer(
          this.blackJackData.name,
          false,
          this.blackJackData.id
        );
        this._dataBaseService.updatePlayer(newPlayer, this.thisRoom.id);
        if (room.singleRoom) {
          this._dataBaseService.addBot(this.thisRoom.id);
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();

    if (this.players[this._myIndex].isMyTurn) {
      const nextIndex: number = this._switchTurn();
      this.updateTurn(this._myIndex, nextIndex);
      clearTimeout(this._turnTimer);
      this._turnTimer = 0;
    }

    this._findNewMaster(this.thisRoom);
    this._dataBaseService.removePlayer(this.blackJackData.id, this.thisRoom.id);

    if (
      this.thisRoom &&
      this._gameService.checkForLastPlayer(this.players, this.blackJackData.id)
    ) {
      this._dataBaseService.deleteRoom(this.thisRoom.id);
    }

    this._destroy$$.complete();
  }

  public startNewGame(): void {
    if (this.players.length <= 1) {
      alert(`At least 2 players should be in the room to start the game.
       Please wait for other players or add bots.`);
      return;
    }

    this._dataBaseService.changeInProgress(true, this.thisRoom.id);
    this._myDeck = this._gameService.shuffleDeck(this._gameService.createDeck());
    this._dataBaseService.updateDeck(this._myDeck, this.thisRoom.id);
    this.players.forEach((player: TPlayer) => {
      player.cards = [];
      player.isFinished = false;
      player.isWinner = false;
      player.score = 0;
      player.isMyTurn = false;
      player.ready = true;
    });
    this.players[0].isMyTurn = true;

    this.players.forEach((player: TPlayer) => {
      this._takeNewCard(player);
      this.thisRoom.players[player.id] = player;
      this._dataBaseService.updatePlayers(this.thisRoom);
    });

    this._dataBaseService.updateDeck(this._myDeck, this.thisRoom.id);
  }

  public stopGame(): void {
    this.players[this._myIndex].isFinished = true;
    this.continueGame();
  }

  public continueGame(): void {
    clearTimeout(this._turnTimer);
    this._turnTimer = 0;
    this._nextTurn(this.players[this._myIndex]);
    const nextIndex: number = this._switchTurn();
    this.updateTurn(this._myIndex, nextIndex);
  }

  private updateTurn(thisIndex: number, nextIndex: number): void {
    this.players[thisIndex].isMyTurn = false;
    this.players[nextIndex].isMyTurn = true;
    this._dataBaseService.updatePlayer(this.players[thisIndex], this.thisRoom.id);
    this._dataBaseService.updatePlayer(this.players[nextIndex], this.thisRoom.id);
  }

  private _nextTurn(player: TPlayer): void {
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
        const nonLoosers: TPlayer[] = this.players.filter((user: TPlayer) => user.score <= 21);
        if (nonLoosers.length === 1) {
          this._finishGame(nonLoosers[0]);
        }
      }

      if (player.score === 21) {
        this._finishGame(player);
      }
    }

    this._dataBaseService.updatePlayer(player, this.thisRoom.id);
    this._dataBaseService.updateDeck(this._myDeck, this.thisRoom.id);

    if (this.players.every((_player: TPlayer) => _player.isFinished)) {
      const winners: TPlayer[] = this._gameService.evaluateWinner(this.players);
      winners.forEach((winner: TPlayer) => {
        winner.isWinner = true;
        this._dataBaseService.updatePlayer(winner, this.thisRoom.id);
      });

      this._dataBaseService.changeInProgress(false, this.thisRoom.id);
      this._dataBaseService.updateTopScores(this.players, this._topScores);
    }
  }

  private _takeNewCard(player: TPlayer): TCard {
    const takenCard: TCard = this._myDeck.pop();
    if (!player.cards) {
      player.cards = [];
    }
    player.cards.push(takenCard);
    player.score = this._gameService.scoreSum(player);

    return takenCard;
  }

  private _switchTurn(): number {
    let nextIndex: number = this._findNextIndex(this._myIndex);

    while (this.players.some((player: TPlayer) => !player.isFinished)) {
      if (this.players[nextIndex].isBot) {
        this._nextTurn(this.players[nextIndex]);
      } else if (!this.players[nextIndex].isFinished) {
        return nextIndex;
      }
      nextIndex = this._findNextIndex(nextIndex);
    }
    return nextIndex;
  }

  private _finishGame(winner: TPlayer): void {
    winner.isWinner = true;
    this.players.forEach((player: TPlayer) => {
      player.isFinished = true;
      this.thisRoom.players[player.id] = player;
    });
    this._dataBaseService.updatePlayers(this.thisRoom);
  }

  private _findNewMaster(room: TRoom): void {
    if (room.masterId === this.blackJackData.id) {
      let nextMasterIndex: number = this._findNextIndex(this._myIndex);

      while (this.players[nextMasterIndex].isBot) {
        nextMasterIndex = this._findNextIndex(nextMasterIndex);
        if (nextMasterIndex === this._myIndex) {
          break;
        }
      }

      const nextMasterId: number = this.players[nextMasterIndex].id;
      this._dataBaseService.changeMaster(nextMasterId, this.thisRoom.id);
    }
  }

  private _findNextIndex(myNumber: number): number {
    return myNumber < this.players.length - 1 ? myNumber + 1 : 0;
  }
}
