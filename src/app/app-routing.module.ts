import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { ViewProductByCategoriesComponent } from './components/view-product-by-categories/view-product-by-categories.component';
import { CartComponent } from './cart/cart.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'medicine',component:MedicineHomeComponent},
  {path:"", redirectTo:'/home',pathMatch:'full'},
  {path:"viewall" ,component:ViewProductByCategoriesComponent},
  {path:"cart",component:CartComponent},
  {
     path:"bookingDetail",component:BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
