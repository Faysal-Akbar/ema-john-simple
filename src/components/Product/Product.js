import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock} = props.product;
    
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className = "product-feature">
                <h3 className = "product-name">{name}</h3>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick = {() => props.handleAddToCart(props.product)} className = "regular-button">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;