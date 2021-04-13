import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ShowProductComponent } from './show-product/show-product.component';
const routes: Routes = [{
  path:'',
  component:ProductListingComponent
},
{
  path:'addproduct',
  component:AddProductComponent
},
{
  path:'view/:id',
  component:ShowProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
