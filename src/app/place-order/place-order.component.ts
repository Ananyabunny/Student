import { Component, OnInit } from '@angular/core';
import { OrderInformation } from '../model/order-information';
import { OrderInformationServiceService } from '../services/order-information-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartInformationServiceService } from '../services/cart-information-service.service';
import { Observable } from 'rxjs';
import { CartInformation } from '../model/cart-information';
import { CustomerInformation } from '../model/customer-information';
import { UpdateuserprofileserviceService } from '../updateuserprofileservice.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  order : OrderInformation;
  cartProducts:CartInformation[]=[];
  customerid: number;
  i:number=0; quantity:number=0; total: number=0;
  customer: CustomerInformation= new CustomerInformation();
  email:string;
  msg:string;
  customerinformation:CustomerInformation=null;

  constructor(private orderService: OrderInformationServiceService, private router : Router, 
    private route: ActivatedRoute, private cartService: CartInformationServiceService,
    private customerser:UpdateuserprofileserviceService) { }

  ngOnInit(): void {
    this.order=new OrderInformation();
    this.email = localStorage.getItem("email"); 
    this.order.orderDate = new Date();
    this.order.orderStatus= "Placed";
    this.order.paymentMethod = "Cash On Delivery";  
    this.customerser.viewcustomer(this.email).subscribe(data=>{this.customerinformation=data,
        this.customerid = this.customerinformation.customerId;
        this.cartService.viewCartByCustomerId(this.customerid)    
        .subscribe(data=>{
          this.cartProducts=data;
          console.log(this.cartProducts);
          this.order.cart=this.cartProducts;
          while(this.i<this.cartProducts.length){
            this.quantity= this.quantity+ this.cartProducts[this.i].quantity;
            this.total= this.total+ this.cartProducts[this.i].subTotal;
            this.i++;
          }
        this.order.totalPrice= this.total;
        this.order.quantity= this.quantity;   
        this.order.customer= this.customerinformation;
        console.log(this.order);
    });           
      this.msg=undefined},
        error=>{console.log(error);this.msg=error.error.message; this.customerinformation=null});
  }
  


  onSubmit(){
    this.orderService.addOrder(this.order)
      .subscribe(data=> console.log(data), error => console.log(error));
    alert("Order Placed Successfully!");
    this.goTo();
  }

  // ngOnInit(): void {
  //   this.customerid = this.route.snapshot.params['customerid'];
  //   console.log(this.customerid);
  //   this.getCartDetails();
  //   this.customer = new CustomerInformation();
  //   this.customer.customerId = this.customerid;
  //   this.order=new OrderInformation();
  //   this.order.customer= this.customer;
  //   this.order.orderDate = new Date();
  //   this.order.orderStatus= "Placed";
  //   this.order.paymentMethod = "Cash On Delivery";
    
  // }

  // getCartDetails(){
  //   this.cartService.viewCartByCustomerId(this.customerid)
  //   .subscribe(data=>{
  //     this.cartProducts=data;
  //     console.log(this.cartProducts);
  //     this.order.cart=this.cartProducts;
  //     while(this.i<this.cartProducts.length){
  //       this.quantity= this.quantity+ this.cartProducts[this.i].quantity;
  //       this.total= this.total+ this.cartProducts[this.i].subTotal;
  //       this.i++;
  //       // this.cartProducts[this.i].status="order";
  //     }
  //     this.order.totalPrice= this.total;
  //     this.order.quantity= this.quantity;
  //   });
  // }

  // save(){
  //   this.orderService.addOrder(this.order)
  //   .subscribe(data=> console.log(data), error => console.log(error));
  //   this.order= new OrderInformation();
  //   this.goTo();
  // }

  // onSubmit() : void {
  //   console.log(this.order);
  //   this.save();
  //   alert("Order Placed Successfully!");
  // }
 

  goTo(){
    this.router.navigateByUrl("/");
  }

  edit(){
    this.router.navigateByUrl("/cart");
  }
}