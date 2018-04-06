import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx'; 

import { promise } from 'selenium-webdriver';
import { combineLatest } from 'rxjs/observable/combineLatest';



@Injectable()
export class ChatService {
public result:any;

  constructor() {
  }
  
}