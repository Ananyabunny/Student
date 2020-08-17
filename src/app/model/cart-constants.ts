export class CartConstants {

    public static SPRING_WEB = "http://localhost:9090/bookstore/";

    public static VIEW_BOOKS_URL = CartConstants.SPRING_WEB + "viewallbooks"
    public static ADD_BOOK_CART_URL = CartConstants.SPRING_WEB + "addbooktocart";
    public static UPDATE_CART_URL = CartConstants.SPRING_WEB + "update";
    public static VIEW_CART_BY_CUST_ID_URL = CartConstants.SPRING_WEB + "viewcartbycustomerid";
    public static REMOVE_CART_ITEM_URL = CartConstants.SPRING_WEB + "removecartitem";
    public static CLEAR_CART_URL = CartConstants.SPRING_WEB + "clearcartbycustomerid";
    public static VIEW_CUST_BY_ID_URL = CartConstants.SPRING_WEB + "viewCustomerById"

}
