
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {



 //userId: string = '';

 //user: Observable<firebase.User>

  private Url = 'http://localhost:3000/api/auth/login';

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {

   }

Login(email, password): Observable<any>{
   return this.http.post<any>(this.Url,

{
body: JSON.stringify({
   email: email,
   password: password
})
}
,
httpOptions
)

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





  signup(email, password){

    return this.afAuth.createUserWithEmailAndPassword(email, password);
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
