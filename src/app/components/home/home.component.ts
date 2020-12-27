import { ProductService } from './../../services/product.service';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';

//import { GoodsService } from './../../services/goods.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

// or we can use goods: Array<Good>
  posts: Product[] = [];
  //goodsObservable: Subscription;
  add: number = -1 ;
  //posts: any[];

  constructor(
     private cs: CartService,
     private as: AuthService,
     private router: Router,
     private ps: ProductService,
     private http: HttpClient) { }

/*
  ngOnInit(): void {
    this.goodsObservable = this.gs.getAllGoods().subscribe(
      data => {
        this.goods = data.map(element => {
           return {
             id: element.payload.doc.id,
             ...element.payload.doc.data() as {}
           };
        });

      });


    }

*/

ngOnInit() {

    this.ps.getGoods().subscribe((response : any[]) => {
         console.log('response from backend >>', response );
         this.posts= response;
         console.log('response from backend posts >>', this.posts );
    })

}

  ngOnDestroy(){
    // when i'm leave this component the  subscribre to be  free
    //this.goodsObservable.unsubscribe();
  }



  addToCart(index : number){
     let id = localStorage.getItem('id');
    if(id)
     this.add = +index;
    else
    this.router.navigate(['/login']);
  }


  buy(amount: number){

    let selectedGood = this.posts[this.add];
    console.log('selectedgood', selectedGood);
    let data= {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
      this.cs.addDataToCart(data).subscribe((result) => {
         this.add = -1
        console.log("data from server carts >>>",result);

      })

  }



}
