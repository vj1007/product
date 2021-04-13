import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ShowProductComponent } from '../show-product/show-product.component';

interface Product{
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
 // products: any = [];
  isLoading: boolean = true;
  //check: string = 'product';

  constructor(private prodser:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.prodser.getProduct().subscribe((res: Product[]) => {console.log(res),this.products=res,this.isLoading = false}, err =>{console.log(err)})
  }
  deleteProduct(id){
    if(confirm('Do you want to delete??')){
      this.prodser.deleteProduct(id);
      console.log("deleted");
      //window.location.reload();
    }
    else{
      
      console.log("notdeleted");

    }
  }
  showProduct(id){
    this.route.navigate(["/view",id]);

  }

}
