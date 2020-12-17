import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Url = 'http://localhost:3000/api/products' ;

  constructor(private http: HttpClient) {

  }



  getGoods(){
    return  this.http.get(this.Url);


   }



}
