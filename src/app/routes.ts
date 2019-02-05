import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { MenuComponent } from './menu/menu.component';
import { PlayroomComponent } from './playroom/playroom.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game-multi',
    component: GameMultiComponent
  },
  {
    path: 'playroom/:id',
    component: PlayroomComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];
