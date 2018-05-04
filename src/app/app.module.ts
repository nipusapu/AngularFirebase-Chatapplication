import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import {ChatService} from './chat.service'


// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import { FeedComponent } from './feed/feed.component';
import { MessageFormComponent } from './message-form/message-form.component';
// Must export the config

export const firebaseConfig = {
  apiKey: "AIzaSyBoCVKFt-8NzweaoMrVjl6inqYPCBsXlhQ",
  authDomain: "platinum-bebop-190614.firebaseapp.com",
  databaseURL: "https://platinum-bebop-190614.firebaseio.com",
  projectId: "platinum-bebop-190614",
  storageBucket: "platinum-bebop-190614.appspot.com",
  messagingSenderId: "440062840407"
};

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'chatroom',      component: ChatroomComponent},
  { path: '',redirectTo: 'signin',pathMatch: 'full'},
  { path: '**', component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ChatroomComponent,
    FeedComponent,
    MessageFormComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule ,
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
    // other imports here
  ],
  providers: [ChatService,AngularFireDatabase,AngularFireAuth,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
