import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ViewCustomerdetailsComponent } from './view-customerdetails/view-customerdetails.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { GetAllOrderdetailsComponent } from './get-all-orderdetails/get-all-orderdetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'product/:bookId', component: ProductComponent },
  {path:'viewcustomer',component:ViewCustomerdetailsComponent},
  {path:'updatecustomer',component:UpdateUserProfileComponent},
  {path:'manageadmin',component:ManageUsersComponent},
  {path:'managecustomer',component:ManageCustomersComponent},
  {path:'createcustomer',component:CreateCustomerComponent},
  {path:'login',component:LoginAdminComponent},
  { path: 'placeOrder', component: PlaceOrderComponent},
  { path: 'myOrders', component: GetAllOrderdetailsComponent},
  { path: 'cart', component: CartComponent},
  {path:'addbooktocart/:bid/:cid/:status',component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
