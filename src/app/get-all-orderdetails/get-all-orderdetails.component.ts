import { Component, OnInit } from '@angular/core';
import { OrderInformationServiceService } from '../services/order-information-service.service';
import { OrderInformation } from '../model/order-information';
import { ActivatedRoute } from '@angular/router';
import { CartInformation } from '../model/cart-information';
import { CartInformationServiceService } from '../services/cart-information-service.service';
import { UpdateuserprofileserviceService } from '../updateuserprofileservice.service';
import { CustomerInformation } from '../model/customer-information';

@Component({
  selector: 'app-get-all-orderdetails',
  templateUrl: './get-all-orderdetails.component.html',
  styleUrls: ['./get-all-orderdetails.component.css']
})
export class GetAllOrderdetailsComponent implements OnInit {
  customerId : number;
  details: boolean= false;
  cartProducts: CartInformation[]=[];
  i:number=0; quantity:number=0; total: number=0;
  customerinformation:CustomerInformation=null;
  email:string;
  msg:string;
  

  constructor(private service: OrderInformationServiceService, private route: ActivatedRoute, private cartService: CartInformationServiceService,private customerser:UpdateuserprofileserviceService) { }
  orderList:Array<OrderInformation> ;
  order:OrderInformation=new OrderInformation();
  
  ngOnInit(): void {
    this.email= localStorage.getItem("email"); 
    this.customerser.viewcustomer(this.email).subscribe(data=>{this.customerinformation=data,
      this.customerId = this.customerinformation.customerId;
      this.service.viewOrderByCustomerId(this.customerId).subscribe(
      	(order)=>{this.orderList= order;},
      	(error)=>{alert("Please Enter Valid Customer ID");});             
      this.msg=undefined},
      error=>{console.log(error);this.msg=error.error.message; this.customerinformation=null});
  }
 
	
  viewOrder(order:OrderInformation){
    this.total=null;
    this.quantity=null;
    this.cartProducts=null;
      this.details = true;
      this.order=order;
      this.cartProducts=order.cart;
      this.i=0;
      while(this.i<this.cartProducts.length){
        this.quantity= this.quantity+ this.cartProducts[this.i].quantity;
        this.total= this.total+ this.cartProducts[this.i].subTotal;
        this.i++;
      }
  }

}

