import React from 'react';
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id,rating, image, price, title}) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Adding item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // ES6 Destructuring
        id, title, image, price, rating
      },
    });
  };
  
  return <div className="product">
      <div className='product__info'>

      <p >{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='product__rating'>
        {
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
      </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket} >Add to Basket</button>
  </div>;
}

export default Product;

