import ShoppingCart from './ShoppingCart.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShippingDetails from "./ShippingDetails.jsx";
import { useState } from 'react';
import PaymentSuccess from './PaymentSuccess.jsx';

function App() {
  const [cartItems, setCartItems] = useState([
    {
        productId: 1,
        productImg:
          "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/07f289b9-7ca1-49ec-a347-b69b95e17032/air-jordan-1-low-se-shoes-H7DD5v.png",
        productName: "Air Jordan 1 Low SE",
        price: 10295,
        quantity: 1,
      },
      {
        productId: 2,
        productImg:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7ae3496-4007-45b5-b5ad-1824af4cd88f/free-metcon-5-workout-shoes-HfHgmZ.png",
        productName: "Nike Free Metcon 5",
        price: 10795,
        quantity: 3,
      },
  ]);

  const updateCartItem = (productId, updatedQuantity) => {
 
    const updatedItems = cartItems
      .map((item) =>
        item.productId === productId ? { ...item, quantity: updatedQuantity } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);
  };
  return (
    <Router>
      <Routes>
      <Route path="/shopping" element={<ShoppingCart cartItems={cartItems} updateCartItem={updateCartItem} />} />
      <Route path="/shippingdetails" element={<ShippingDetails cartItems={cartItems} />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;