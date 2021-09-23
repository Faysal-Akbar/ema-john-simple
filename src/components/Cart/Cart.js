import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
       total = total + product.price;
    }
    const shipping = 30;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Review : {props.cart.length}</h4>
            <p>Total : {total}</p>
            <p>$ {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Total : {grandTotal}</p>
        </div>
    );
};

export default Cart;