import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = `https://sheltered-springs-67444.herokuapp.com/product`
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.baseUrl);
  }
  addProduct(post){
    return this.http.post(this.baseUrl, post).toPromise().then(data => {console.log(data),alert("Product has been added")});
  }
  deleteProduct(id:number){
    console.log("delete1");
    
    return this.http.delete(this.baseUrl+'/'+id).toPromise().then(data => {console.log(data),window.location.reload()});
  }
  showProduct(id:number){
    return this.http.get(this.baseUrl+'/'+id);
  }
}
