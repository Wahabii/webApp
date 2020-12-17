import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }


  addToCart(data: Product) {
     let uid = localStorage.getItem('id');
    console.log('iduser>>>', uid);
    return this.fs.collection(`users/${uid}/cart`).add(data);

  }

  getCart(){
    let uid = localStorage.getItem('id');
    return this.fs.collection(`users/${uid}/cart`).snapshotChanges();
  }

 delete(id){
    let uid = localStorage.getItem('id');
    return this.fs.doc(`users/${uid}/cart/${id}`).delete();
 }

 save(id, amount){
   let uid = localStorage.getItem('id');
   return this.fs.doc(`users/${uid}/cart/${id}`).update({
     amount
   })

 }

}
