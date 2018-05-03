import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable,Subject } from 'rxjs/Rx';
import {Message} from '../message';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

chatmessages:Observable<Message[]>;
chatmessage:Message[];
message:Message;

  constructor(private chatservice:ChatService) { }

  ngOnInit() {
    this.chatmessages=this.chatservice.getMessages();
    this.chatmessages.subscribe(data => {this.chatmessage=data});
  }
  

}
