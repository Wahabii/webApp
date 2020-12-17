import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {

  constructor(private as: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{

     return new Promise(resolve => {
        let uid = localStorage.getItem('id');
         console.log('promise>>>', uid)
           if(uid) resolve(true);
           else{
              this.router.navigate(['/login']);
              resolve(false);
           }
        })

  }

}
