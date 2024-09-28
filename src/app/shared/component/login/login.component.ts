import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm!:FormGroup
  isNewUser:boolean=false
  @Output()
  emitMethod:EventEmitter<boolean>=new EventEmitter


  constructor(private fb:FormBuilder,private http:HttpService){

  }
 
  ngOnInit(){
  this.initilizeForm()
  }

  initilizeForm() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }
 

  login(){
    console.log(this.loginForm.value)
    const httpParam:HttpParams= new HttpParams()
                                .set('email',this.loginForm.get('email')?.value)   
                                .set('password',this.loginForm.get('password')?.value)
                                
                                
  this.http.getdatafromserver('UserDetail',httpParam).subscribe({
     next:(response:any)=>{
      if(response && response.length>0){
        this.isNewUser=false
        const userObj=response[0];
        const token="ghvdhvhsjkflhvnj vkjfbv";
        localStorage.setItem("userDetail",JSON.stringify(userObj))
        localStorage.setItem("token",token)
        this.emitMethod.emit(true)
      }else{
        this.isNewUser=true
      }
  
     }
  })  }
}
