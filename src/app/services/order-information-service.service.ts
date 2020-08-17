import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderInformation } from '../model/order-information';
import { Observable } from 'rxjs';
import { OrderConstants } from '../model/order-constants';

@Injectable({
  providedIn: 'root'
})
export class OrderInformationServiceService {
 private uri : string = '';

  constructor(private http : HttpClient) { }

  addOrder(order: OrderInformation): Observable<Object> {
    return this.http.post(`${OrderConstants.ADD_ORDER_URL}`, order);
  }
  viewOrderByCustomerId(customerId:number):Observable<any>{
    return this.http.get(`${OrderConstants.VIEW_ORDER_BY_CUST_ID_URL}/${customerId}`);
  }
  viewOrderById(orderId:number): Observable<any>{
    return this.http.get(`${OrderConstants.VIEW_ORDER_BY_ID_URL}/${orderId}`);
  }
  
}
