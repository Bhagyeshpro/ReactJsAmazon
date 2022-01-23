import React from 'react';
import {useStateValue} from "./StateProvider"

function Checkout() {
    const [{basket}] = useStateValue();
  return <div>
      <h1>{[basket[0]]}</h1>
      <h1>{[basket[1]]}</h1>
  </div>;
}

export default Checkout;
