import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

interface Product{
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  products: Product[] = [];
   isLoading: boolean = true;
   public id:any;

  constructor(private showprod:ProductService,private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actroute.params.subscribe((res) => {this.id = res.id;
      console.log(this.id)});
    this.showprod.showProduct(this.id).subscribe((res: Product[]) => {console.log(res),this.products=res,this.isLoading = false}, err =>{console.log(err)})
  }

}
