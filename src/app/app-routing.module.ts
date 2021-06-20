import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders/my-orders.component';
import { ProductComponent } from './product/product/product.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent
  },
  {
    path: 'orders', component: MyOrdersComponent
  },
  {
    path: 'admin-orders', component: AdminOrdersComponent
  },
  {
    path: 'admin-products', component: AdminProductsComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
