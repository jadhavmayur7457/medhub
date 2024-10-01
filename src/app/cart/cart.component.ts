import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 cartItem:any;
 orderObj:order= new order();

 productList:product[]=[]
  

 constructor(private cart:ServiceService,private router:Router){

 }
  ngOnInit(): void {
   this.cartItem  =  this.cart.GetCartItemFromStoreage()
   console.log(this.cartItem,"cart item")
   this.setProductlist()
   this.calculateTotalPrice()

   

  }
 
  setProductlist() {
    if(this.cartItem && this.cartItem.length>0){
      this.cartItem.forEach((item:any) => {
        var productObj=new product()
        productObj.productName=item.medicineName;
       productObj.brand=item.brand;
       productObj.discription=item.description;
       productObj.price=item.actualPrice;
       productObj.discount=item.discountPrice;
       productObj.quantity=1
       productObj.totalPrice=productObj.discount* productObj.quantity;
       productObj.drugCode=item.drugCode
       productObj.type=item.type
       this.productList.push(productObj)
       console.log(this.productList)
      });
      // this.orderObj.orderid=generateRandomNumber()
      this.orderObj.product= this.productList
    }
  }
  quantitychange(type:string,index:number){
   var selectedProduct=this. orderObj.product[index]
   if(type == "Positive"){
    ++selectedProduct.quantity
   }else{
    --selectedProduct.quantity
   }
   selectedProduct.totalPrice=selectedProduct.discount*selectedProduct.quantity
   this.calculateTotalPrice()
  }
  calculateTotalPrice() {
   this.orderObj.totalamount=0
   this.orderObj.totaldiscount=0
   this.orderObj.product.forEach((item:any)=>{
    this.orderObj.totalamount+=item.totalPrice
   })
  }
  checkout(){
    this.router.navigate(["/bookingDetail"])
  }
}
export class order {
  orderid!: string;
  fullname!: string;
  mobileNo!: number;
  emailId!: string;
  totalamount!: number;
  totaldiscount!: number;
  totalItem!: number;
  finalAmount!: number;
  deliveryType!: string;
  addressDetail: Address = new Address();
  product: product[] = [];
}

export class Address {
  city!: string;
  pincode!: number;
  state!: string;
  addressLine1!: string;
  addressLine2!: string;
}
export class product {
  productName!: string;
  price!: number;
  quantity!: number;
  drugCode!: number;
  totalPrice!: number;
  discount!: number;
  discription!: string;
  brand!: string;
  type!: string;
}


