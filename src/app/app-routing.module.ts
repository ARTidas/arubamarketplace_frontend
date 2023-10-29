import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HelloComponent } from './hello/hello.component';
import { CategoryPageComponent } from './category-page/category-page.component';


const routes: Routes = [
  
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductPageComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'hello/:id', component: HelloComponent},
  {path: 'category', component: CategoryPageComponent},
  


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
