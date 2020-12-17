import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }


    addNewUser(id, name , address){

        return   this.fs.doc('users/' + id).set({
            name: name, // we can use name place name: name
            address: address
          })
    }


    getUserData() {
      let uid = localStorage.getItem('id');
       return this.fs.doc('users/' + uid).valueChanges();
    }
}
