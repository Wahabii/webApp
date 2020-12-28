import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = [];

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    /*
    this.cs.getCart().pipe(take(1)).subscribe(cart  => {
      this.cart = cart.map(shopping => {
         return {
           id: shopping.payload.doc.id,
           ...shopping.payload.doc.data() as {}
         }
      })
       console.log('cate >>>', this.cart);

    })
    */
  }


  delete(index){

    this.cs.delete(this.cart[index].id);

  }

  save(index){
    this.cs.save(this.cart[index].id, this.cart[index].amount);

  }



}
