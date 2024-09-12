import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent {

Pincode:string="";
city:string="";
data:any[]=[]

constructor(private http:HttpService){

}

ngOnInit(){
  const storedata=localStorage.getItem('pincodeData')

  if(storedata){
  this.data=JSON.parse(storedata);
  if(this.data.length>0)
    {
    this.city=this.data[0].pincodeCity
    this. Pincode=this.data[0].pincode
  }
  }
}
 addPincode(){
  if(!this.Pincode){
    alert("Please Enter Pincode")
    return
  }
  const endpoint="pincodeDetails"

  const param=new HttpParams().set('pincode',this.Pincode)

  this.http.getdatafromserver(endpoint,param).subscribe({
    next:(resp:any)=>{
     this.data=resp
     if(resp.length>0){
      this.city=this.data[0].pincodeCity
    this. Pincode=this.data[0].pincode
     }else{
      this.city=""
     }
     localStorage.setItem('pincodeData',JSON.stringify(this.data))
    },
    error:(error)=>{
    console.log(error,"error fetching data")
    }
  })
  
  
 }

}
