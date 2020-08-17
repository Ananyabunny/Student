import { BookInformation } from './book-information';

export class CartInformation {
    cartId:number;
    customerId:number;
    quantity:number;
    status:string;
    subTotal:number;
    book:BookInformation=new BookInformation();
}
