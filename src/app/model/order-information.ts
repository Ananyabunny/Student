import { CartInformation } from './cart-information';
import { CustomerInformation } from './customer-information';

export class OrderInformation {
    orderId : number;
    recipientName : string;
    recipientPhoneNumber : string;
    streetAddress: string;
    city : string;
    zipCode : number;
    country : string;
    shippingAddress : string;
    quantity : number;
    totalPrice : number;
    orderStatus : string;
    paymentMethod : string;
    orderDate : Date;
    cart : CartInformation[]=[];
    customer : CustomerInformation;
}
