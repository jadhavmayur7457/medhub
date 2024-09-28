import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  
  ]
})
export class SharedModule { }
