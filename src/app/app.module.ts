import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


import { appRoutes } from './routes';
import { MyFirstServiceService } from './services/my-first-service.service';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './game/sidebar/sidebar.component';
import { FieldComponent } from './game/field/field.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GameMultiComponent } from './game-multi/game-multi.component';
import { LoginComponent } from './login/login.component';
import { PlayroomComponent } from './playroom/playroom.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    SidebarComponent,
    FieldComponent,
    NotFoundPageComponent,
    GameMultiComponent,
    LoginComponent,
    PlayroomComponent,
    MultiplayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'firabase-test'),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [MyFirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
