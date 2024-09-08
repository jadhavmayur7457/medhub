import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss']
})
export class TopDealComponent {

  topdeal:any=[]
  constructor(private http:HttpService){

  }

  ngOnInit(){
    this.getdata()
  }
  getdata() {
     
    const endPointname='top-deals'
    this.http.getdatafromserver(endPointname).subscribe({
      next:(respones:any)=>{
      if(respones && respones.length>0){
       this.topdeal=respones;
       console.log(this.topdeal,respones,"aala ka")
      }
      },
      error:()=>{

      },
      complete:()=>{

      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

