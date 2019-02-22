import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, pluck, switchMap, tap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  public id: number;
  public thisRoom: TRoom;
  public blackJackData: TLocalData =
    this._userService.getCurrentUser() || this._userService.randomUserData;
  public players: TPlayer[] = [];
  public isRoomAccessible: boolean = false;
  public myIndex: number;
  public topScores: {};

  private _destroy$$: Subject<void> = new Subject();
  private _myDeck: TCard[];

  public constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _dataBaseService: DataBaseService,
    private _gameService: GameService,
    private router: Router
  ) {}
  // @HostListener('window:beforeunload') doOnUnload(): void {
  //   alert('unload!');
  // }

  public ngOnInit(): void {
    if (this._userService.getCurrentUser()) {
      this.blackJackData = this._userService.getCurrentUser();
    } else {
      this.blackJackData = this._userService.randomUserData;
      const stringblackJackData: string = JSON.stringify(this.blackJackData);
      localStorage.setItem('blackJackData', stringblackJackData);
    }

    this._dataBaseService.getTopScores()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((topScores: {}) => {
        this.topScores = topScores || {};
      });

    this.route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom(roomId)),
        tap((room: TRoom) => {
          if (!room) {
            this.router.navigate(['closed-room']);
          } else {
            this.thisRoom = room;
            this.players = room.players ? Object.values(room.players) : [];
            this._myDeck = room.deck;
            this.myIndex = this.players.findIndex(
              (player: TPlayer) => player.id === this.blackJackData.userId
            );
          }
        }),
        filter(Boolean),
        tap((room: TRoom) => {
          if (
            this._gameService.checkInProgress(room, this.blackJackData.userId) ||
            this._gameService.checkMaxPlayers(room, this.blackJackData.userId) ||
            this._gameService.checkIfSingle(room, this.blackJackData.userId)
          ) {
            this.router.navigate(['closed-room']);
          }
        }),
        filter(
          (room: TRoom) =>
            !this._gameService.checkInProgress(room, this.blackJackData.userId) &&
            !this._gameService.checkMaxPlayers(room, this.blackJackData.userId) &&
            !this._gameService.checkIfSingle(room, this.blackJackData.userId)
        ),
        tap(() => {
          this.isRoomAccessible = true;
        }),
        filter((room: TRoom) => {
          return room.players ? !room.players[this.blackJackData.userId] : true;
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe((room: TRoom) => {
        const newPlayer: TPlayer = this._gameService.createPlayer(
          this.blackJackData.userName,
          false,
          this.blackJackData.userId
        );
        this._dataBaseService.updatePlayer(newPlayer, this.thisRoom.id);
        if (room.singleRoom) {
          this._dataBaseService.addBot(this.thisRoom.id);
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._findNewMaster(this.thisRoom);
    this._dataBaseService.removePlayer(this.blackJackData.userId, this.thisRoom.id);

    if (
      this.thisRoom &&
      this._gameService.checkForLastPlayer(this.players, this.blackJackData.userId)
    ) {
      this._dataBaseService.deleteRoom(this.thisRoom.id);
    }
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

    if (this.blackJackData.userId === this.thisRoom.masterId) {
      this.players.forEach((player: TPlayer) => {
        this._takeNewCard(player);
        this._dataBaseService.updatePlayer(player, this.thisRoom.id);
      });
    }

    this._dataBaseService.updateDeck(this._myDeck, this.thisRoom.id);
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

  //   clearTimeout(this.turnTimer);
  //   this.turnTimer = setTimeout(() => {this.players[nextIndex].isFinished = true;
  //   const nextNextIndex: number = this.switchTurn(nextIndex);
  //   this._dataBaseService.updatePlayer(this.players[nextIndex], this.thisRoom.id);
  //   this._dataBaseService.updatePlayer(this.players[nextNextIndex], this.thisRoom.id);
  //   }, 60000);

    this._dataBaseService.updatePlayer(this.players[this.myIndex], this.thisRoom.id);
    this._dataBaseService.updatePlayer(this.players[nextIndex], this.thisRoom.id);
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
      // clearTimeout(this.turnTimer);
      winners.forEach((winner: TPlayer) => {
        winner.isWinner = true;
        this._dataBaseService.updatePlayer(winner, this.thisRoom.id);
      });

      this._dataBaseService.changeInProgress(false, this.thisRoom.id);
      this._dataBaseService.updateTopScores(this.players, this.topScores);
      this._dataBaseService.updatePlayer(player, this.thisRoom.id);
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

  private _finishGame(winner: TPlayer): void {
    winner.isWinner = true;
    this.players.forEach((player: TPlayer) => {
      player.isFinished = true;
      this._dataBaseService.updatePlayer(player, this.thisRoom.id);
    });
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
      this._dataBaseService.changeMaster(nextMasterId, this.thisRoom.id);
    }
  }
}
