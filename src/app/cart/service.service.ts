import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


   CartArr:any=[]
   cartCount:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor() { }

  addToCart(productObj:any){
   if(productObj){
    this.CartArr.push(productObj)
    var cartdetstr=JSON.stringify(this.CartArr)
    localStorage.setItem("cart",cartdetstr)
   }
   this.cartCount.next(this.CartArr.length)
  }
}
