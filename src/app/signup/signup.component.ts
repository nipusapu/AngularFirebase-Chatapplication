import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email;
  password;
  repeat;
  constructor(private Chatservice:ChatService) { }
  Signup(){
    if(this.email!=empty&&this.password!=empty)
    this.Chatservice.createuser(this.email,this.password);
  }
  ngOnInit() {
  }

}
