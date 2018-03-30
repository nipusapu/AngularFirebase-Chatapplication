import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';


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
// Must export the config

export const firebaseConfig = {
  apiKey: "AIzaSyBoCVKFt-8NzweaoMrVjl6inqYPCBsXlhQ",
  authDomain: "platinum-bebop-190614.firebaseapp.com",
  databaseURL: "https://platinum-bebop-190614.firebaseio.com",
  projectId: "platinum-bebop-190614",
  storageBucket: "platinum-bebop-190614.appspot.com",
  messagingSenderId: "440062840407"
};


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ChatroomComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  providers: [ChatService,AngularFireDatabase,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
