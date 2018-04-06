import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';
import { User } from '../user';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
result:any;
isnotnull:boolean=false;
  
  constructor(public firbaseAuth: AngularFireAuth,private router: Router) { }

  model=new User(0,"","","");
  login(){
   if(this.model.email!=""&&this.model.password!=""){
    this.firbaseAuth.auth.signInWithEmailAndPassword(this.model.email, this.model.password).then( (data)=>{
      if( data != null){
       this.router.navigate(['chatroom']);
       localStorage.setItem('currentUser', data);
     }
   }).catch((error)=> {
    if(error!=null)
    this.isnotnull=true;
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
   this.result= errorMessage;
   
  });
  
  }
}

  ngOnInit() {
    this.firbaseAuth.auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

}
