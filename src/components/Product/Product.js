import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    
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
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br /> <br />
                <button onClick = {() => props.handleAddToCart(props.product)} className = "regular-button">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;