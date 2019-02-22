import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { GameService } from './game.service';

@Injectable()
export class DataBaseService {
  public constructor(
    public db: AngularFireDatabase,
    private router: Router,
    private _userService: UserService,
    private _gameService: GameService
  ) {}

  public getRooms(): Observable<TRoom[]> {
    return this.db.list<TRoom>('rooms').valueChanges();
  }

  public deleteRoom(roomId: number): void {
    this.db.list('/rooms').remove('room' + roomId);
  }

  public getTopScores(): Observable<{}> {
    return this.db.object('records').valueChanges();
  }

  public getRoom(id: number): Observable<TRoom> {
    return this.db.object<TRoom>('rooms/room' + id).valueChanges();
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

  public updatePlayers(room: TRoom): void {
    this.db.object('/rooms/room' + room.id + `/players`).update(room.players);
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

  public updateTopScores(players: TPlayer[], topScores: {}): void {
    players.forEach((player: TPlayer) => {
      if (!player.isBot) {
        topScores[player.id] = topScores[player.id]
          ? {
              victories: topScores[player.id].victories,
              games: topScores[player.id].games + 1,
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
          topScores[player.id].victories++;
        }

        this.db.object(`/records`).update(topScores);
      }
    });
  }

  public addRoom(roomName: string, maxPlayers: number, singleRoom: boolean): void {
    const roomId: number = new Date().getTime();
    const blackJackData: Partial<TPlayer> =
      this._userService.getCurrentUser() || this._userService.randomUserData;
    this.db.object('/rooms/room' + roomId).update({
      name: roomName,
      maxPlayers: maxPlayers || 2,
      id: roomId,
      masterId: blackJackData.id,
      players: {},
      gameInProgress: false,
      singleRoom
    });
    this.router.navigate(['/game', roomId]);
  }

  public addBot(roomId: number): void {
    this.updatePlayer(this._gameService.createBot(), roomId);
  }
}
