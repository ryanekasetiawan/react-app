import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button/";
import { useEffect, useContext, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import DarkModeButton from "../Elements/DarkModeButton";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();
  
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  
  const products = () => {
    window.location.href = "/products";
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  
  return (
    <div className="flex justify-end items-center h-20 bg-blue-600 text-white px-4 md:px-10">
      <span className="text-sm md:text-base mr-5">{username}</span>
      <Button className="bg-black" onClick={products}>
        Products
      </Button>
      <Button className="bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | Price : $ {total.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
      </div>
      <DarkModeButton />
    </div>
  );
};

export default Navbar;