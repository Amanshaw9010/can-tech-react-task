// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Career from "./components/Career/Career.jsx";
// import Success from "./components/success/success.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Courses from "./components/Courses/Courses.jsx";
// import Wabinar from "./components/Wabinar/Wabinar.jsx";
// import Counselling from "./components/Counselling/Counselling.jsx";
// import Page from "./components/index_page/component/Page.jsx";
// import AboutUs from "./components/About/Components/Aboutus.jsx";
// import ShoppingCart from "./components/Shopping/ShoppingCart.jsx";
// import Started from "./components/Register/Started.jsx";
// import Registration from "./components/Form/Registration.jsx";
// import App from "./components/Shopping/App.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Page />} />
//       <Route path="success" element={<Success />} />
//       <Route path="career" element={<Career />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="courses" element={<Courses />} />
//       <Route path="wabinar" element={<Wabinar />} />
//       <Route path="counselling" element={<Counselling />} />
//       <Route path="about" element={<AboutUs />} />

//       <Route path="register" element={<Started />} />
{
  /* <App /> */
}
{
  /* <Route path="form" element={<Registration />} /> */
}
{
  /* </Route> */
}
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import {
  Form,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Career from "./components/Career/Career.jsx";
import Success from "./components/Success/Success.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Wabinar from "./components/Wabinar/Wabinar.jsx";
import Counselling from "./components/Counselling/Counselling.jsx";
import Page from "./components/index_page/component/Page.jsx";
import AboutUs from "./components/About/Components/Aboutus.jsx";
import ShoppingCart from "./components/Shopping/ShoppingCart.jsx";
import ShippingDetails from "./components/Shopping/ShippingDetails.jsx";
import PaymentSuccess from "./components/Shopping/PaymentSuccess.jsx";
import Started from "./components/Register/Started.jsx";
import AllForm from "./components/Form/AllForm.jsx";

const AppWrapper = () => {
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
        item.productId === productId
          ? { ...item, quantity: updatedQuantity }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Page />} />
        <Route path="success" element={<Success />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="wabinar" element={<Wabinar />} />
        <Route path="counselling" element={<Counselling />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path="shopping"
          element={
            <ShoppingCart
              cartItems={cartItems}
              updateCartItem={updateCartItem}
            />
          }
        />
        <Route
          path="shipping"
          element={<ShippingDetails cartItems={cartItems} />}
        />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="register" element={<Started />} />
        <Route path="form" element={<AllForm />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
