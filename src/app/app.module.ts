import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


import { appRoutes } from './routes';
import { DataBaseService } from './services/data-base.service';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FieldComponent } from './field/field.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { LoginGuard } from './guards/login.guard';
import { ClosedRoomComponent } from './closed-room/closed-room.component';
import { RecordsComponent } from './records/records.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    FieldComponent,
    NotFoundPageComponent,
    GameMultiComponent,
    LoginComponent,
    GameComponent,
    ClosedRoomComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'firabase-test'),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [GameService, UserService, DataBaseService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
