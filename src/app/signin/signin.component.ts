import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(private Chatservice:ChatService) { }

  model=new User(0,"","");
  login(){
    if(this.model.email!=""&&this.model.password!="")
    this.Chatservice.signinuser(this.model.email,this.model.password);
  }

  ngOnInit():void  {
    
  }
  get diagnostic() { return JSON.stringify(this.model); }

}
