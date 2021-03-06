import { Routes } from '@angular/router';

import { LoginGuard } from './guards/login.guard';

import { ClosedRoomComponent } from './closed-room/closed-room.component';
import { GameComponent } from './game/game.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecordsComponent } from './records/records.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'hall-of-fame',
    component: RecordsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game-multi',
    component: GameMultiComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'game/:id',
    component: GameComponent,
  },
  {
    path: 'closed-room',
    component: ClosedRoomComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];
