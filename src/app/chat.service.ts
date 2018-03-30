import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class ChatService {


  constructor(public firbaseAuth: AngularFireAuth) {
  }
  
  createuser(email, password){
    this.firbaseAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode +" "+ errorMessage);
    // ...
  });
  }
  signinuser(email, password){
    this.firbaseAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode +" "+ errorMessage);
   });
 }


 signoutuser(){
  this.firbaseAuth.auth.signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
 }
}