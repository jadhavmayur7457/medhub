import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-view-product-by-categories',
  templateUrl: './view-product-by-categories.component.html',
  styleUrls: ['./view-product-by-categories.component.scss']
})
export class ViewProductByCategoriesComponent implements OnInit {
  
  
  TopDealByCategories:any;

  constructor(private http:HttpService){

  }
  ngOnInit(): void {
    this.getproductdetailbycategories()
  }

  getproductdetailbycategories() {
  this.http.getdatafromserver('top-deals-by-category').subscribe({
    next:(resp:any)=>{
    this.TopDealByCategories=resp
    console.log(this.TopDealByCategories,"yrto ka")
    },
    error:()=>{

    }
    
  })
  }
}


