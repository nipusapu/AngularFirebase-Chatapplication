import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { ChatService } from '../chat.service';
import { User } from '../user';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import {Router, CanActivate, ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
result:any;
isnotnull:boolean=false;
returnUrl: string;
status:any;
islogged:boolean=false;

  
  constructor(public firbaseAuth: AngularFireAuth,private router: Router,private route: ActivatedRoute,private _cookieService:CookieService) {
    if(_cookieService.get('remember')){
      this.model.email=this._cookieService.get('username');
      this.model.password=this._cookieService.get('password');
      this.model.rememberme=this._cookieService.get('remember');
      }
      this.status=firbaseAuth.authState; 
   }

  model=new User();
  login(){
    this._cookieService.put('username',this.model.email);
    this._cookieService.put('password',this.model.password);
    this._cookieService.put('remember',this.model.rememberme);

   if(this.model.email!=""&&this.model.password!=""){
    this.firbaseAuth.auth.signInWithEmailAndPassword(this.model.email, this.model.password).then( (data)=>{
      if( data != null && data != undefined){
        this.router.navigateByUrl(this.returnUrl);
       
       history.pushState(null, null, '/signin');
       window.addEventListener('popstate', function(event) {
       history.pushState(null, null, '/signin');
       });
     }
   }).catch((error)=> {
    if(error!=null)
    this.isnotnull=true;
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
   this.result= errorMessage;
   
  });
  
  }
}

  ngOnInit() {
    this.status.subscribe(data=> {
      if(data!=null)
       localStorage.setItem('status',"true");
       else
       localStorage.setItem('status',"false");
    });
    // Get the query params
     
    this.route.queryParams.subscribe(params => this.returnUrl = params['return'] || '/users');
      
  }
 
}
