import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully Inserted');
                clearTheCart();
                reset();
            }
        })
    }

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}  
                <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;