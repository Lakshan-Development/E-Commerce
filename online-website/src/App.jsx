import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import PlaceOrder from "./Pages/PlaceOrder";
import Producct from "./Pages/Producct";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import Verify from "./Pages/Verify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/producct/:productId" element={<Producct />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
