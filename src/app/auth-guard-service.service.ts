import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class AuthGuardServiceService implements CanActivate{
  
  constructor(private afAuth:AngularFireAuth,private router: Router) {  
   
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('status')=="true") {
      return true;
    } else {
      this.router.navigate(['/signin'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }   

}
