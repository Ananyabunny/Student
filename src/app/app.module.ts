import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MostFavoredBooksComponent } from './most-favored-books/most-favored-books.component';
import { BestSellingBooksComponent } from './best-selling-books/best-selling-books.component';
import { RecentPublishedBooksComponent } from './recent-published-books/recent-published-books.component';
import { ProductComponent } from './product/product.component';
import { ViewCustomerdetailsComponent } from './view-customerdetails/view-customerdetails.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CartComponent } from './cart/cart.component';
import { GetAllOrderdetailsComponent } from './get-all-orderdetails/get-all-orderdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MostFavoredBooksComponent,
    BestSellingBooksComponent,
    RecentPublishedBooksComponent,
    ProductComponent,
    ViewCustomerdetailsComponent,
    UpdateUserProfileComponent,
    ManageUsersComponent,
    ManageCustomersComponent,
    CreateCustomerComponent,
    LoginAdminComponent,
    PlaceOrderComponent,
    CartComponent,
    GetAllOrderdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
