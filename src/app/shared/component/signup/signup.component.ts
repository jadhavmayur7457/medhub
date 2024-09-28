import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
   userObj:User=new User()
   DisplayOtpField:boolean=false
  otpgenrated!: number;
  otpTimer!:Number;
  otpEnter!:Number;
  isOtpVerified:boolean=false
  isOtpInvalid:boolean=false
  sub:any

  constructor(private http:HttpService){

  }

  ngOnInit(){

  }
  getOtp(){
    this.DisplayOtpField=true
    this.otpgenrated=this.generatedRandomNumber();
    console.log("OTP: ",this.otpgenrated)
   this. sub= interval(1000).subscribe({
      next:(response)=>{
          this.otpTimer=60-response
          if(this.otpTimer===0){
           this.sub.unsubscribe()
          }
      }
    })

  }
  generatedRandomNumber(){
    var minm=100000;
    var maxm=999999
    return Math.floor(
      Math.random()*(maxm-minm+1))+minm
  }
 
  verifyOtp(){
  
    if(this.otpgenrated == this.otpEnter){
      this.DisplayOtpField=false;
      this.isOtpVerified=true;
      this.isOtpInvalid=false;
      this.userObj.isOtpVerified=true;
      this.sub.unsubscribe();
    }else{
      this.DisplayOtpField=true;
      this.isOtpVerified=false;
      this.isOtpInvalid=true
    }
  }
  SignUP(){
    console.log("submit")
    if(this.isOtpVerified){
      this.http.postdatafromserver("UserDetail",this.userObj).subscribe({
        next:(response:any)=>{
         if(response){
           
         }
        }
      })
    }
  }
}
class User{
  name!:string;
  email!:string;
  mobile!:string;
  password!:string;
  isOtpVerified!:boolean;
}