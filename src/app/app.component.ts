import { Component } from '@angular/core';
import {ChatService} from './chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService] 
})
export class AppComponent {
  
 
}
