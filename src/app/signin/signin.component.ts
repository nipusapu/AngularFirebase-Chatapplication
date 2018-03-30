import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email;
  password;
  constructor(private Chatservice:ChatService) { }

  login(){
    if(this.email!=empty&&this.password!=empty)
    this.Chatservice.signinuser(this.email,this.password);
  }

  ngOnInit() {
  }

}
