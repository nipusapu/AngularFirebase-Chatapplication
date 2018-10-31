import { Component, OnInit,Input } from '@angular/core';
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
user=localStorage.getItem('username');
@Input() islogout: boolean;
@Input() usrname:string;

  constructor(private chatservice:ChatService) { }
  
  ngOnInit() {
    if(this.islogout==false){
    this.chatmessages=this.chatservice.getMessages(this.usrname);
    this.chatmessages.subscribe(data => {this.chatmessage=data});
    console.log(this.islogout); 
    }
    else{
      console.log(this.islogout);
    }
  }
  
  

}
