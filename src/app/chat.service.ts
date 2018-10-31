import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs/Rx'; 
import { AngularFireDatabase} from "angularfire2/database";  
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase  from 'firebase/app';
import {Message} from '../app/message';
import * as users from './user';
 

@Injectable()
export class ChatService {
  user:firebase.User;
  chatMessages: Observable<Message[]>;
  userName:string;
  users:Observable<users.User[]>;
  listofusers:users.User[] ;

  constructor(private db:AngularFireDatabase, private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(auth => {
      if (auth != null && auth != undefined){
        this.user=auth;
      }
    });
    
  }

 sendMessage(usrnm,msg: string){
 const timestamp= this.getTimeStamp();
 const email=this.user.email;
 var crrntuser=localStorage.getItem('username');
 var masgdb="/"+crrntuser+"-"+usrnm;
 this.db.list(masgdb).push({
   message : msg,
   timestamp: timestamp,
   username : localStorage.getItem('username'),
   email: email
 });
 console.log("sent");
 }

  getMessages(usrnm):Observable<Message[]>{
  var crrntuser=localStorage.getItem('username');
  var masgdb="/"+crrntuser+"-"+usrnm;
    return this.db.list(masgdb, ref=> ref.orderByKey().limitToLast(25)).valueChanges();
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
  getUser(){
   this.users= this.db.list('/users', ref=> ref.orderByKey()).valueChanges();
   this.users.subscribe(data => {
     this.listofusers = data;
     var i;
     for(i=0;i< this.listofusers.length;i++){
       if(this.listofusers[i].email==this.user.email){
        localStorage.setItem('username', this.listofusers[i].username);
        console.log();
        break;
       }
     }
    });

  }
  getUserList(){
    this.users= this.db.list('/users', ref=> ref.orderByKey()).valueChanges();
    return this.users;
  }

}