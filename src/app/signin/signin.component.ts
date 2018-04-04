import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';
import { User } from '../user';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
result:any;
  
  constructor(private Chatservice:ChatService,private router: Router) { }

  model=new User(0,"","");
  login(){
   if(this.model.email!=""&&this.model.password!=""){
   this.Chatservice.signinuser(this.model.email,this.model.password);
   this.result = localStorage.getItem("currentUser");
    if(this.result!= null){
    this.router.navigate(['chatroom']);
    }
   else{
    console.log("ddddd");
   }
  }
}

  ngOnInit() {
    this.Chatservice.signoutuser();
  }
  get diagnostic() { return JSON.stringify(this.model); }

}
