import React, { useState, useEffect } from 'react';

const CartItemCard = ({ item, updateCartItem }) => {
  const [subtotal, setSubtotal] = useState(item.price * item.quantity);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setSubtotal(item.price * quantity);
  }, [item.price, quantity]);

  const addButton = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateCartItem(item.productId, quantity + 1);
  };

  const minusButton = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateCartItem(item.productId, quantity - 1);
    }
  };

  return (
    <>
      <div className="cartPage w-4/5 mx-auto  py-3 px-12 bg-gray-300 mt-5 items-center align-middle grid grid-cols-4 place-items-center ">
        <div className="flex flex-col md:flex-col lg:flex-col gap-1 md:gap-5 lg:gap-5  align-middle items-center">
          <div className="w-16 md:w-32 lg:w-32">
            <img src={item.productImg} alt="" />
          </div>
          <p className="font-normal md:font-semibold lg:font-semibold md:text-sm text-xs lg:text-base">{item.productName}</p>
        </div>
        <p className="font-normal md:text-base text-xs lg:text-base">{item.price}</p>
        <div className="quantity flex justify-center font-normal md:text-base text-xs lg:text-base flex-col md:flex-row lg:flex-row items-center">
          {quantity}
          <div className="buttons flex pl-0 md:pl-5 lg:pl-5 justify-between gap-1 md:gap-3 lg:gap-3">
            <button onClick={addButton} className="bg-transparent hover:bg-gray-400 text-black hover:text-white px-1 md:px-2 lg:px-2 border font-semibold border-black hover:border-transparent rounded">+</button>
            <button onClick={minusButton} className="bg-transparent hover:bg-gray-400 text-black hover:text-white px-1 md:px-2 lg:px-2 border font-semibold border-black hover:border-transparent rounded">-</button>
          </div>
        </div>
        <p className="font-normal md:text-base text-xs lg:text-base">{subtotal}</p>
      </div>
    </>
  );
}

export default CartItemCard;
