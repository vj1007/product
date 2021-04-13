import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  productDetails: any;

  constructor(private formbuilder: FormBuilder, private add:ProductService) { }

  ngOnInit(): void {
    this.addProduct = this.formbuilder.group({
      title: ["",Validators.required],
      imageUrl: ["",Validators.required],
      description: [""]
    });
  }
  onSubmit(){
    console.log("hi",this.addProduct.value);
    this.add.addProduct(this.addProduct.value);
  }

}
