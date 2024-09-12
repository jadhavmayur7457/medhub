import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  baseUrl:string='http://localhost:3000/'
  
  headers:HttpHeaders=new HttpHeaders({
    'content-type':'application/json'
  })

  getdatafromserver(endPoint: string,param:HttpParams=new HttpParams()){
   
  const Url=this.baseUrl+ endPoint
  return  this.http.get(Url,{headers:this.headers,params:param})
  }
}
