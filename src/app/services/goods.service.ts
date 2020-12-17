import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  

  constructor(private fs: AngularFirestore , private storage: AngularFireStorage ) { }




/*
  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges();
  }
*/

  addNewGood(name: string, price: Number, image: File){

    return new Promise((resolve,reject) => {

   let ref =  this.storage.ref('goods/' + image.name);
   ref.put(image).then( () => {
     ref.getDownloadURL().subscribe( photoUrl => {
       console.log('photourl >>>', photoUrl);

       this.fs.collection('goods').add({
         name,
         price,
         photoUrl
       }).then(() => resolve('hello'))
      })
     });
    })


  }



}
