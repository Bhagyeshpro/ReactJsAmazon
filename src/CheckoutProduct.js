import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({image, title, price, id, rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log(id, image, title, rating, price);

  const removeFormBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

return <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct__image'/>
      <div className='checkoutProduct__info'>   
        <p className='checkoutProduct__title'>{title}</p>
      <p className='checkoutProduct__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='checkoutProduct__rating'>
        {
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
      </div>
      <button onClick={removeFormBasket} className='checkoutProduct__button'>Remove from basket</button>
      </div>
  </div>;
}

export default CheckoutProduct;