import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartInformation } from '../model/cart-information';
import { CartConstants } from '../model/cart-constants';

@Injectable({
  providedIn: 'root'
})
export class CartInformationServiceService {
  constructor(private http: HttpClient) { }
  
  viewCartByCustomerId(customerid:number): Observable<any> {
    return this.http.get(`${CartConstants.VIEW_CART_BY_CUST_ID_URL}/${customerid}`);
  }

  public updateCart(cartId: number, quantity: number): Observable<any>{
    return this.http.post(`${CartConstants.UPDATE_CART_URL}/${cartId}/${quantity}`, {responseType: 'text'});
  }

  removecartItem(cartId : number) : Observable<any>
  {
    console.log("Id="+cartId);
    return this.http.delete(`${CartConstants.REMOVE_CART_ITEM_URL}/${cartId}`);
  }
  clearCartByCustomerId(customerId : number) : Observable<any>
  {
    return this.http.delete(`${CartConstants.CLEAR_CART_URL}/${customerId}`);
  }

  bookList():Observable<any> {
    return this.http.get(`${CartConstants.VIEW_BOOKS_URL}`);
  }

  addBookToCart(bookId: number, customerId: number, status: string): Observable<any> {
    return this.http.post(`${CartConstants.ADD_BOOK_CART_URL}/${bookId}/${customerId}/${status}`, {responseType: 'text'});
  }

  findCustomer(customerId: number): Observable<any>{
    return this.http.get(`${CartConstants.VIEW_CUST_BY_ID_URL}/${customerId}`);
  }
  
}
