import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { User } from '../user';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import {Router, CanActivate, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import {FormControl} from "@angular/forms";
import {ChatService} from '../chat.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model=new User();
  result:any;
  isnotnull:boolean=false;
  returnUrl: string;
  constructor(public firbaseAuth: AngularFireAuth,private router: Router,private chatService:ChatService,private route: ActivatedRoute) { }
  
  Signup(){
    if(this.model.email!=null&& this.model.password!=null){
    this.firbaseAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password).then( (data)=>{
      if( data != null){
       this.router.navigate(['users']);
       this.chatService.saveUser(this.model.username,this.model.email);
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
// reset login status
this.firbaseAuth.auth.signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});  
  }

}
