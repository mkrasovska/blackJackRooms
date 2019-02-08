import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { MenuComponent } from './menu/menu.component';
import { PlayroomComponent } from './playroom/playroom.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { RoomGuardGuard } from './guards/room-guard.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game-multi',
    component: GameMultiComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'playroom/:id',
    component: PlayroomComponent,
    // canActivate: [RoomGuardGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];
