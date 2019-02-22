import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { appRoutes } from './routes';
import { DataBaseService } from './services/data-base.service';
import { UserService } from './services/user.service';
import { GameService } from './services/game.service';
import { LoginGuard } from './guards/login.guard';

import { AppComponent } from './app.component';
import { ClosedRoomComponent } from './closed-room/closed-room.component';
import { GameComponent } from './game/game.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { FieldComponent } from './field/field.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecordsComponent } from './records/records.component';
import { SidebarComponent } from './sidebar/sidebar.component';


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
