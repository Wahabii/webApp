import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { Shopping } from '../interfaces/shopping.interface';
import { Observable } from 'rxjs';


let token = localStorage.getItem('token');
console.log(token)
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'access_token': token})
}



@Injectable({
  providedIn: 'root'
})
export class CartService {

   private url = 'http://localhost:3000/api/carts';
  constructor(private fs: AngularFirestore, private as: AuthService,private http: HttpClient) { }


  addDataToCart(data: Shopping): Observable <any> {

    console.log("data reived in the server>>>", data);

    return this.http.post<any>(this.url,data,httpOptions);

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
