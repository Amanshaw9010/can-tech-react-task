import { useState, useEffect } from "react";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom"

const ShoppingCart = ({ cartItems, updateCartItem }) => {
  

  const [totalSubtotal, setTotalSubtotal] = useState(0);

  useEffect(() => {
    // Update totalSubtotal when cartItems change
    const newTotalSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalSubtotal(newTotalSubtotal);
  }, [cartItems]);

  const shipping = 0;
  const taxRate = 0.18; // 18% tax/GST

  const orderTotalInclTax = totalSubtotal + shipping + totalSubtotal * taxRate;

  const navigate = useNavigate(); // useNavigate for React Router v6

  const handleContinue = () => {
    navigate(`/shipping?orderTotal=${orderTotalInclTax}`);
  };

  return (
    <>
      <div className="cartPage">
        <div className="cartHeader bg-gray-200 w-4/5 mx-auto px-12 mt-24 py-3 text-stone-900 grid grid-cols-4 place-items-center lg:text-xl md:text-base text-xs font-normal md:font-semibold lg:font-semibold ">
          <p>Product & Image</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {cartItems.map((item) => (
          <div className="cardContainer" key={item.productId}>
            <CartItemCard item={item} updateCartItem={updateCartItem} />
          </div>
        ))}

        <div className="flex justify-around w-4/5 mx-auto flex-col md:flex-row lg:flex-row">
          <div className="flex mt-16 flex-col align-middle gap-7 py-7 items-center w-full md:w-2/6 lg:w-2/6 border-2 border-gray-400 text-gray-900">
            <h3 className=" font-medium text-sm lg:text-base lg:font-bold">
              Total and Tax Information
            </h3>
          </div>

          <div className="flex mt-16 flex-col align-middle gap-7 py-7 items-center w-full md:w-2/6 lg:w-2/6 border-2 border-gray-400 text-gray-900">
            <div className="flex w-full px-10 justify-between">
              <p>Subtotal:</p>
              <p>{totalSubtotal}</p>
            </div>
            <div className="flex w-full px-10 justify-between">
              <p>Shipping:</p>
              <p>{shipping}</p>
            </div>
            <div className="flex w-full px-10 justify-between">
              <p>Tax/GST(18%):</p>
              <p>{totalSubtotal * taxRate}</p>
            </div>
            <div className="w-full border-t-2 pt-3 border-gray-400 px-10 flex font-medium text-sm lg:text-base lg:font-bold justify-between">
              <p>Order Total Incl. Tax:</p>
              <p>{orderTotalInclTax}</p>
            </div>
          </div>
        </div>
        <div className="checkoutbutton flex justify-center md:justify-end lg:justify-end align-middle lg:mr-80 md:mr-40 mt-10 mb-10">
          <button onClick={handleContinue} className=" hover:bg-green-600 bg-green-500 text-white px-5 py-2 border font-semibold rounded">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;