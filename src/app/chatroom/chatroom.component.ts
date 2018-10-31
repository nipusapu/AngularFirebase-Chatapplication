import { Component, OnInit ,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {Router,ActivatedRoute, Params,CanActivate,Data} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../chat.service';
import {FormControl} from "@angular/forms";
import { AngularFireAuth} from 'angularfire2/auth';

export interface Message { user: string; message: string; }

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit,AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  msg: string;
  isLogout:boolean=false;

  constructor(private chatservice:ChatService,private firbaseAuth:AngularFireAuth,private router: Router, private route: ActivatedRoute,) {
  }

  

  logout(){
    this.router.navigate(['signin']);
    this.isLogout=true;
    this.firbaseAuth.auth.signOut().then(function() {
    localStorage.clear();
    }).catch(function(error) {
      // An error happened.
    });
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();
} 

scrollToBottom(): void {
    try {
        //this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } 
    catch(err) { 
    }                 
}
  
  ngOnInit() {
    var name=this.route.snapshot.params['name'];
    console.log(name);
    this.scrollToBottom();
    this.chatservice.getUser();
  }

}
