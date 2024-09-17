import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

   DisplayOtpField:boolean=false
  otpgenrated!: number;
  otpTimer!:Number

  constructor(){

  }

  ngOnInit(){

  }
  getOtp(){
    this.DisplayOtpField=true
    this.otpgenrated=this.generatedRandomNumber();
    console.log("OTP: ",this.otpgenrated)
   var sub= interval(1000).subscribe({
      next:(response)=>{
          this.otpTimer=60-response
          if(this.otpTimer===0){
            sub.unsubscribe()
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
    this.DisplayOtpField=false
  }
}
