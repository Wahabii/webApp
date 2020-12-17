import { GoodsService } from './../../services/goods.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image') pucture: ElementRef

  constructor(private gs: GoodsService) { }

  ngOnInit(): void {
  }

  addNewGood(form){
    console.log(form.value);
    //let name = (<Good>form.value).name,
    //price = (<Good>form.value).price;
    //this.gs.addNewGood(name,price, (<HTMLInputElement> this.pucture.nativeElement).files[0]).then(msg => console.log(msg));




  }

}
