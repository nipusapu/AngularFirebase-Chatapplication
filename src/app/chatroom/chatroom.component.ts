import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
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
export class ChatroomComponent implements OnInit,OnDestroy {
  msg: string;

  constructor(private chatservice:ChatService,private firbaseAuth:AngularFireAuth,private router: Router) {
  }

  logout(){
    this.router.navigate(['signin']);
    
 
  }
  ngOnDestroy(){
    this.firbaseAuth.auth.signOut().then(function() {
      localStorage.clear();
    }).catch(function(error) {
      // An error happened.
    });
  }
  ngOnInit() {
  }

}
