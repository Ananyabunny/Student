import { Component, OnInit } from '@angular/core';
import { CartInformationServiceService } from '../services/cart-information-service.service';
import { CartInformation } from '../model/cart-information';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInformation } from '../model/customer-information';
import { UpdateuserprofileserviceService } from '../updateuserprofileservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:CartInformation[]=[];
  customerid: number;
  i:number=0; quantity:number=0; total: number=0;
  link: string;
  email:string;
  msg:string;
  customerinformation:CustomerInformation=null;

  constructor(private customerser:UpdateuserprofileserviceService,private route: ActivatedRoute, private cartService: CartInformationServiceService, private router: Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email"); 
    
    this.getCartDetails();
  }
  
   
  getCartDetails() {
    this.customerser.viewcustomer(this.email).subscribe(data=>{this.customerinformation=data,
      this.customerid = this.customerinformation.customerId;   
      this.cartService.viewCartByCustomerId(this.customerid)
      .subscribe(data=>{
        this.cartProducts=data;
        console.log(this.cartProducts);     
      });
      this.msg=undefined},
      error=>{console.log(error);this.msg=error.error.message; this.customerinformation=null});
   
    
  }

  updateCart(cartId: number, quantity: number){
    this.cartService.updateCart(cartId,quantity).subscribe(data=>{
      console.log(data);
    });
    alert("Cart Updated Successfully");
      this.getCartDetails();
  }

  removecartItem(cartId: number) {
    this.cartService.removecartItem(cartId).subscribe(data =>{console.log(data);
      alert("Item Deleted Successfully");
      this.getCartDetails();
    } );
   }
    
  clearCartByCustomerId()
  {
    this.cartService.clearCartByCustomerId(this.customerid).subscribe(data=>{
      console.log(data);
      alert("Cart Cleared Successfully");
      this.getCartDetails();
    });
  }

  checkOut(){
    this.link= '/placeOrder';
    this.router.navigate([this.link]);
  }

  goToHome(){
    this.router.navigateByUrl("/");
  }
findCustomer(){
  this.cartService.findCustomer(this.customerid).subscribe(data =>{
    console.log(data);
    if(data==""){
      this.router.navigate(['books']);
      alert("Please Login First");
    }
    else
     this.checkOut();
  });
  }
}
