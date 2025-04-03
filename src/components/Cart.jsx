import React from "react";
import { appContext } from "../App";
import { useContext } from "react";

export default function Cart() {
  const { cart, setCart, products } = useContext(appContext);

  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };

  const increment = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const decrement = (id) => {
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    } else {
      handleDelete(id); // Remove from cart when quantity is 0
    }
  };

  return (
    <div>
      {products.map(
        (value) =>
          cart[value.id] > 0 && (
            <div key={value.id}>
              {value.name} - ₹{value.price} - {cart[value.id]} - ₹
              {value.price * cart[value.id]}  
              <button onClick={() => increment(value.id)}>+</button>  
              {cart[value.id]}  
              <button onClick={() => decrement(value.id)}>-</button>  
              <button onClick={() => handleDelete(value.id)}>Delete</button>
            </div>
          )
      )}
    </div>
  );
}