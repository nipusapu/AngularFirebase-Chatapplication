import { Component, OnInit } from '@angular/core';
import {ChatService}from '../chat.service';
import * as users from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listofusers:users.User[] ;
  user:users.User;

  constructor(private chatservice:ChatService) { }
   
   username = localStorage.getItem('username');

  ngOnInit() {
    this.chatservice.getUserList().subscribe(users=>{
      this.listofusers=users
    }
    );
  }
  dbcheck(){

  }

}
