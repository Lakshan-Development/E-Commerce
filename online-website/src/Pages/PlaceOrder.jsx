import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContaxt } from "../Context/ShowContaxt";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backEndUrl,
    setCartItems,
    products,
    delivery_fee,
    cartItems,
    getCartAmount,
    token,
  } = useContext(ShopContaxt);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // API Calls For COD
        case "cod":
        const response = await axios.post(backEndUrl + '/api/order/place',orderData,{headers:{token}})
        
        if (response.data.success) {
          setCartItems({})
          navigate('/order')
        }
        else {
          toast.error(response.data.message)
        }
          break;

          case'stripe':
            const responseStripe = await axios.post( backEndUrl + '/api/order/stripe',orderData,{headers:{token}} )
            if (responseStripe.data.success) {
              const { session_url } = responseStripe.data
              window.location.replace(session_url);
            }
            else{
              toast.error(responseStripe.data.message);
            }

            break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div class="text-xl sm:text-2xl my-3">
          <Title txt1={"DELIVERY"} txt2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            onChange={onChangeHandler}
            value={formData.firstName}
            name="firstName"
            placeholder="First name"
            id=""
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            onChange={onChangeHandler}
            value={formData.lastName}
            name="lastName"
            placeholder="Last name"
            id=""
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          onChange={onChangeHandler}
          value={formData.email}
          name="email"
          placeholder="Email Address"
          id=""
          required
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          onChange={onChangeHandler}
          value={formData.street}
          name="street"
          placeholder="Street"
          id=""
          required
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            onChange={onChangeHandler}
            value={formData.city}
            name="city"
            placeholder="City"
            id=""
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            onChange={onChangeHandler}
            value={formData.state}
            name="state"
            placeholder="State"
            id=""
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            onChange={onChangeHandler}
            value={formData.zipcode}
            name="zipcode"
            placeholder="Zipcode"
            id=""
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            onChange={onChangeHandler}
            value={formData.country}
            name="country"
            placeholder="Country"
            id=""
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          onChange={onChangeHandler}
          value={formData.phone}
          name="phone"
          placeholder="Phone"
          id=""
          required
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title txt1={"PAYMENT"} txt2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === "stripe" ? "border-green-400" : ""
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="Stripe Logo"
              />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === "razorpay" ? "border-green-400" : ""
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="Razorpay Logo"
              />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === "cod" ? "border-green-400" : ""
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;