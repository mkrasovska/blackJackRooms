import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MyFirstServiceService } from '../services/my-first-service.service';
import { map, tap, pluck, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomGuardGuard implements CanActivate {
  constructor(
    private _myService: MyFirstServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.route.params
      .pipe(
        tap((params: Params) => console.log(params)),
        pluck('id'),
        switchMap((roomId: number) => { console.log(roomId); return this._myService.getThisRoomData(roomId); }),
        tap((room: TRoom) => {
        if (!room) {
          this.router.navigate(['menu']);
        }
      }),
      map(Boolean)
    );
  }
}
