import { Component, OnInit } from '@angular/core';
import { BookstoreserviceService } from './bookstoreservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BookInformation } from './book-information';
import { BookCategory } from './book-category';
import { ManageUsersService } from './services/manage-users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore';

  name=localStorage.getItem("fullName");
  role=localStorage.getItem("role");
  showAdmin=false;
  showCustomer=false;
  withoutLogin=true;
  constructor(private router:Router) {
    
  }
  ngOnInit(): void {
  this.loginConditions();
  }
  home()
  {
    window.location.href="";
  }
  loginConditions():void
  {
    if(this.role=="admin")
  {
    this.showAdmin=true;
    this.withoutLogin=false;
  }
  else if(this.role=="customer")
  {
     this.showCustomer=true;
     this.withoutLogin=false;
  }
  }
  signout()
  {
    localStorage.clear();
    this.withoutLogin=true;
    this.showAdmin=false;
    this.showCustomer=false;
  }
}
