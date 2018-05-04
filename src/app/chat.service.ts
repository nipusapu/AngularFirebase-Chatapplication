import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable,Subject } from 'rxjs/Rx'; 
import { AngularFireDatabase, AngularFireList,AngularFireAction } from "angularfire2/database";  
import {AngularFireAuth} from 'angularfire2/auth'
import { importExpr } from '@angular/compiler/src/output/output_ast';
import * as firebase  from 'firebase/app';
import { auth } from 'firebase/app';
import {Message} from '../app/message';
import { User } from '@firebase/auth-types';


@Injectable()
export class ChatService {
  user:firebase.User;
  chatMessages: Observable<Message[]>;
  userName:Observable<string>;

  constructor(private db:AngularFireDatabase, private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(auth => {
      if (auth != null && auth != undefined){
        this.user=auth;
      }
    });
  }

 sendMessage(msg: string){
 const timestamp= this.getTimeStamp();
 const email=this.user.email;
 this.db.list('chatMessage').push({
   message : msg,
   timestamp: timestamp,
   username : email,
   email: email
 });
 console.log("sent");
 }
  getMessages():Observable<Message[]>{
    return this.db.list('/chatMessage', ref=> ref.orderByKey().limitToLast(25)).valueChanges();
  }
  getTimeStamp(){
    const now= new Date();
    const date= now.getUTCFullYear()+"/"+ (now.getUTCMonth() +1)+"/"+now.getUTCDate();
    
    const time= now.getUTCHours()+":"+ (now.getUTCMinutes() +1)+":"+now.getUTCSeconds();

    return (date + " " + time);


  }
  saveUser(username:string, email:string){
    this.db.list('users').push({
      username : username,
      email: email
    });
  }
}