import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { User } from '../user';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model=new User(0,"","","");
  result:any;
  isnotnull:boolean=false;
  constructor(public firbaseAuth: AngularFireAuth,private router: Router) { }
  
  Signup(){
    if(this.model.email!=null&& this.model.password!=null){
    this.firbaseAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password).then( (data)=>{
      if( data != null){
       this.router.navigate(['chatroom']);
       localStorage.setItem('currentUser', data);
     }
     else{
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
  }

}
