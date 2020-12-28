import { User } from './../interfaces/user.interface';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

let token = localStorage.getItem('token');
const TOKEN_KEY = 'AuthToken';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {



 //userId: string = '';

 //user: Observable<firebase.User>
  private Url = 'http://localhost:3000/api/auth/login';
  private Urlregister = 'http://localhost:3000/api/users/register';

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {

   }

Login(data:User): Observable<any>{
   return this.http.post<any>(this.Url,data,httpOptions)

};

public getToken(): string {
  return localStorage.getItem(TOKEN_KEY);
}

isLoggedIn() {

  let token = localStorage.getItem('token');
   if(!token){
      return false;
   }else{
     return true;
   }

}


  logout(){
    return new Promise(resolve => {
      localStorage.removeItem('id');
      localStorage.removeItem('token');

      resolve(true);
      })

  }





  signup(data : User){

    //return this.afAuth.createUserWithEmailAndPassword(email, password);
  }



  Signup(data : User): Observable<any>{
     console.log('data getting from the server :>>>', data);

    return this.http.post<any>(this.Urlregister,data, httpOptions)


  }



  /*
  login(email, password){
    return new Promise(resolve => {
      this.afAuth.signInWithEmailAndPassword(email, password).then( (resp) => {
      localStorage.setItem('id', resp.user.uid );
      localStorage.setItem('token', resp.user.refreshToken);
      resolve(true);
    });
    })
  }
  */



}
