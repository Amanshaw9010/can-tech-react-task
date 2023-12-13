import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ShippingDetails = ({ cartItems }) => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    mobilenumber: "",
    gst: "",
  });

  const [states, setStates] = useState([]);

  useEffect(() => {
    // Load states based on the initial value of the country
    if (details.country) {
      const stateData = State.getStatesOfCountry(details.country);
      setStates(stateData);
    }
  }, [details.country]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === "country") {
      const stateData = State.getStatesOfCountry(value);
      setStates(stateData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const location = useLocation();
  const orderTotalInclTax = new URLSearchParams(location.search).get(
    "orderTotal"
  );

  const handleCheckout = async () => {
    try {
      await axios.post("http://localhost:4000/api/shippingdetails", details);
    } catch (error) {
      console.error("Error saving shipping details:", error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold text-gray-700 text-center mb-8">
        Shipping Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-2">
        <div className="col-span-2 lg:col-span-1 bg-gray-200 py-5 px-10 rounded-xl w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 mt-3">
            Shipping Address
          </h1>
          <form onSubmit={handleSubmit} className="flex justify-center ">
            <div className=" mb-2">
              {/* <label htmlFor="firstname" className="block">
                First Name
              </label> */}
              <input
                className="bg-gray-100 appearance-none border  border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                type="text"
                name="firstname" //name should me matched to state's name && name given in schema
                placeholder="First Name"
                id="firstname"
                required
                autoComplete="off"
                value={details.firstname}
                onChange={handleInput}
              />
            </div>

            <div>
              {/* <label htmlFor="lastname" className="block">
                Last Name
              </label> */}
              <input
                className="bg-gray-100 appearance-none border  border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                type="text"
                name="lastname"
                placeholder="Last Name"
                id="lastname"
                required
                autoComplete="off"
                value={details.lastname}
                onChange={handleInput}
              />
            </div>

            <div className="w-full">
              {/* <label htmlFor="address" className="block">
                Address
              </label> */}
              <textarea
                className="bg-gray-100 appearance-none border  border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                type="text"
                name="address"
                id="address"
                required
                placeholder="Address"
                autoComplete="off"
                value={details.address}
                onChange={handleInput}
              />
            </div>

            <div>
              {/* <label htmlFor="country" className="block">
                Country
              </label> */}
              <select
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
                name="country"
                id="country"
                value={details.country}
                onChange={handleInput}
              >
                <option value={""}>Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              {/* <label htmlFor="state" className="block">
                State
              </label> */}
              <select
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
                name="state"
                id="state"
                value={details.state}
                onChange={handleInput}
              >
                <option value={""}>State</option>
                {states.map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {/* <label htmlFor="city" className="block">
                City
              </label> */}
              <input
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="city" //name should me matched to state's name && name given in schema
                placeholder="City"
                id="city"
                required
                autoComplete="off"
                value={details.city}
                onChange={handleInput}
              />
            </div>

            <div>
              {/* <label htmlFor="zip" className="block">
                Zip/Postal Code
              </label> */}
              <input
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="zip"
                placeholder="Pin Code"
                id="zip"
                required
                autoComplete="off"
                value={details.zip}
                onChange={handleInput}
              />
            </div>

            <div>
              {/* <label htmlFor="mobilenumber" className="block">
                Mobile Number
              </label> */}
              <input
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="mobilenumber"
                placeholder="Mobile Number"
                id="mobilenumber"
                required
                autoComplete="off"
                value={details.mobilenumber}
                onChange={handleInput}
              />
            </div>

            <div>
              {/* <label htmlFor="gst" className="block">
                GSTN Number
              </label> */}
              <input
                className="bg-gray-100 appearance-none border w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="gst" //name should me matched to state's name && name given in schema
                placeholder="GST"
                id="gst"
                required
                autoComplete="off"
                value={details.gst}
                onChange={handleInput}
              />
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 mb-10">
              <button
                type="submit"
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 border font-semibold rounded mt-6"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-full md:w-[400px] pl-[30px] col-span-3 lg:col-span-1 bg-gray-300 py-5 px-10 rounded-xl mb-10 lg:mb-1"
          // style={{ width: "400px", paddingLeft: "30px" }}
        >
          <h1 className="text-2xl font-semibold text-gray-800 mb-8 mt-3">
            Order Summary
          </h1>

          <div>
            <h2 className=" my-4">Number of items: {cartItems.length}</h2>
            <div className="bg-gray-400 pt-4 pl-4 rounded-lg">
              {cartItems.map((item) => (
                <div key={item.productId} className="grid  grid-cols-4 gap-2">
                  <div className=" row-span-3">
                    <img
                      src={item.productImg}
                      alt={item.productName}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className=" col-span-3">
                    <div>{item.productName}</div>
                    <div>{item.quantity}</div>
                    <div>{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
