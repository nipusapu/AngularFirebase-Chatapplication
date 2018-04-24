import { Component, OnInit } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../chat.service';
import {FormControl} from "@angular/forms";

export interface Message { user: string; message: string; }

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  msg: string;

  constructor(private chatservice:ChatService) {
    
  }
  

  ngOnInit() {
  }

}
