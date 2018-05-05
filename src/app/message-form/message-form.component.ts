import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  msg: string;
  constructor(private chatservice:ChatService) { }

  sendMessage(){
    this.chatservice.sendMessage(this.msg);
    this.msg="";
  }
  ngOnInit() {
  }

}
