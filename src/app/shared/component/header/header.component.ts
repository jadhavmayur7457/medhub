import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/cart/service.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   userinfo:any;
   Count:number=0

   @ViewChild('closeButton')
   closebtn!:ElementRef
   constructor(private auth:AuthenticationService,private cart :ServiceService){

   }

   ngOnInit(){
    this.cart.cartCount.subscribe((response:any)=>{
  if(response){
    this.Count=response
  }
    })
    this.Getcartitem()
   }

  Getcartitem() {
    var CartItem=this.cart.GetCartItemFromStoreage()
    if(CartItem !== null){
      this.Count=CartItem.length
    }
  }

  action:string='Login'
   hideLoginBtn:boolean=false

  triggerAction(ActionName:string){
    this.action=ActionName
  }

  getdata(isLoginSuccess:boolean){
  if(isLoginSuccess){
    this.hideLoginBtn=true
    this.userinfo=this.auth.getUser();
    this.closebtn.nativeElement.click()
    
  }
  }
  logout(){
   localStorage.removeItem("userinfo") 
   localStorage.removeItem("token")
   this.hideLoginBtn=false
 
  }
}
