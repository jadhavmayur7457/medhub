import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { ViewProductByCategoriesComponent } from './components/view-product-by-categories/view-product-by-categories.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'medicine',component:MedicineHomeComponent},
  {path:"", redirectTo:'/home',pathMatch:'full'},
  {path:"viewall" ,component:ViewProductByCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
