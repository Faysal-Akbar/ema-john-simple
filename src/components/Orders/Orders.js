import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Orders = () => {
    const history = useHistory();
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization':`Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
            if(res.status === 200){
                return res.json();
            }
            else if(res.status === 401){
                history.push('/login')
            }
        })
        .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <h2>My Orders {orders.length}</h2>
            <ul>
            {
                orders.map(order => <li>{order.name}-----{order.email}</li>)
            }
            </ul>
        </div>
    );
};

export default Orders;