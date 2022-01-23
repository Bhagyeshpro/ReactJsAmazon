import React from 'react';
import {useStateValue} from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();

  return <div className="checkout">
      <img 
        className='checkout__ad'
      src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png'
      />
      {
        basket?.length === 0 ? (
          <div>
            <h1 className='checkout__title'>Your Shopping basket is empty!</h1>
            <p className='checkout__title'>Check your Saved for later items below or go to Home</p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title checkout__titleMain">Your Shopping basket</h1>

            {/* List of checkout products */}
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

        )
      }
      {/* <h1>{[basket[1]]}</h1> */}
  </div>;
}

export default Checkout;
