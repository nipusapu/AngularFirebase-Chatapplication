import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import { promise } from 'selenium-webdriver';
import { combineLatest } from 'rxjs/observable/combineLatest';


@Injectable()
export class ChatService {
public result:any;

  constructor(public firbaseAuth: AngularFireAuth) {
  }
  
  createuser(email, password){
    this.firbaseAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
     console.log(errorCode)
      return errorCode;
    
  
   // console.log(errorCode +" "+ errorMessage);
   // console.log(this.result);
    // ...
  });
  }
  
  signinuser(email, password){
    this.firbaseAuth.auth.signInWithEmailAndPassword(email, password).then( (data)=>{
       if( data != null){
        localStorage.setItem('currentUser', data);
      }
      else{
        console.log("ssssss");
      }
    }).catch((error)=> {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    this.result= errorCode+""+errorMessage;
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