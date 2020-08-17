import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerReview } from '../customer-review';
import { CustomerReviewForm } from '../customer-review-form';
import { CustomerReviewService } from '../customer-review.service';
import { BookInformation } from '../book-information';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateuserprofileserviceService } from '../updateuserprofileservice.service';
import { CustomerInformation } from '../customer-information';
import { CartInformationServiceService } from '../services/cart-information-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('reviewform')
  form:NgForm;

  review:CustomerReview=new CustomerReview();
  reviewForm:CustomerReviewForm=new CustomerReviewForm();
  reviews:Array<CustomerReview>=[];
  customer_id:number;
  message:string;
  status:string = "cart";
  errorMessage:string;
  bookId:number;
  book:BookInformation=new BookInformation();
  sub: any;
  email:string;
  customerinformation:CustomerInformation=null;
  pathurl:any;
  msg: string;
  
  constructor(private customerser:UpdateuserprofileserviceService,private customerReviewService:CustomerReviewService,private route:ActivatedRoute,private cartService: CartInformationServiceService) { }

  ngOnInit() {
    this.email = localStorage.getItem("email"); 
  this.searchById();
    this.sub = this.route.params.subscribe(params => {
                                this.bookId = +params['bookId']; 
                                 this.customerReviewService.getBookByBookId(this.bookId).subscribe(data=>{this.book=data;},
      error=>{console.log(error); 
        this.errorMessage=error.error.message});
    this.customerReviewService.viewReviewByBookId(this.bookId).subscribe(data=>{this.reviews=data;},
      error=>{console.log(error); 
            this.errorMessage=error.error.message});
        this.pathurl="../assets/images/"+this.bookId+".jpg";                                                                                   
  });
  
  }
  searchById(){
    this.customerser.viewcustomer(this.email).subscribe(data=>{this.customerinformation=data,
      this.customer_id = this.customerinformation.customerId;            
      this.msg=undefined},
      error=>{console.log(error);this.msg=error.error.message; this.customerinformation=null});
  }
  addReview(){
    this.reviewForm.customerId=this.customer_id;
    this.reviewForm.bookId=this.bookId;
    console.log(this.review.bookRating);
    console.log(this.review.reviewHeadline);
    console.log(this.review.reviewComment);
    this.customerReviewService.addReview(this.reviewForm).subscribe(data=>{this.message=data;
                                                                      this.errorMessage=undefined;
                                                                alert("Review Successfully Added")},
                                                      error=>{console.log(error); 
                                                                this.errorMessage=error.error.message;});
    alert("Review Added Successfully");
  }

  viewReviewByBookId(){
    this.customerReviewService.viewReviewByBookId(this.bookId).subscribe(data=>{this.reviews=data;},
      error=>{console.log(error); 
        this.errorMessage=error.error.message});
  }

  viewBookByBookId(){
    this.customerReviewService.getBookByBookId(this.bookId).subscribe(data=>{this.book=data;},
      error=>{console.log(error); 
        this.errorMessage=error.error.message});
  }

  addBookToCart(bookId: number) {
    this.cartService.addBookToCart(bookId, this.customer_id, this.status).subscribe(data => {
      console.log(data);
      alert("Book Added to Cart Successfully");
    }, error => this.errorMessage = error.error.message)
    alert("Book Added to Cart Successfully");
  }


}
