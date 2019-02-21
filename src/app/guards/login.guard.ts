import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { MyFirstServiceService } from '../services/my-first-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  public constructor(private router: Router, private _myService: MyFirstServiceService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this._myService.getMyData())  {
    return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
