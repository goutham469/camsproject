import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';


function Cart() {
    const [timeSlots, setTimeSlots] = useState([]);
    const state = useLocation().state;
    function getCurrentTime24HourFormat() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
      
        //return `${hours}:${minutes}:${seconds}`;
        return `${hours}`;
      }

    const checkTimings = () => {
        fetch("http://localhost:4000/Food_Items_Timings")
            .then(data => data.json())
            .then(data => {
                const currentTime = Number(getCurrentTime24HourFormat());
                const updatedTimeSlots = state.map(item => {
                    const productName = item.product_name;
                    const slots = data[productName] || [];
                    return { product_name: productName, slots };
                });
                setTimeSlots(updatedTimeSlots);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div>
            <h2 className='H203'>Your Orders</h2>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                    <div className='row'>
                        {state.map((product, index) => (
                            <div key={index} className="product-Cart-item col-lg-12">
                                <h3>{product.product_name} Price: {product.price}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={checkTimings} className='Cart-Payment-Button'>Check Timings</button>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-5'>
                <div>
                    {/* Display availability details here */}
                    {timeSlots.map((item, index) => (
                        <div className='box02' key={index}>
                        <h3>{item.product_name} Availability:</h3>
                        {item.slots.length > 0 ? (
                            <ul>
                            {item.slots.map((slot, idx) => (
                                <button className='btn btn-secondary m-2' key={idx}>
                                Timing: {String(String(slot.timing).substring(0, 2)+" - "+String(slot.timing).substring(2, 4))}, Slots: {slot.slots}
                                </button>
                            ))}
                            </ul>
                        ) : (
                            <p>No availability information found.</p>
                        )}
                        </div>
                            ))}
                    
                </div>
                <button className='btn btn-success CartMakePayment'>make payment</button>

                </div>
            </div>
            
        </div>
    );
}

export default Cart;
