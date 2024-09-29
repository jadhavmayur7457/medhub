import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 cartItem:any

 constructor(private cart:ServiceService){

 }
  ngOnInit(): void {
   this.cartItem  =  this.cart.GetCartItemFromStoreage()
  }

}
