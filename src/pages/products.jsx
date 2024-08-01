import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/";
import CardProduct from "../components/Fragments/CardProduct";
import {getProducts} from "../services/product.service";
import {getUsername} from "../services/auth.service";
 

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
    
  });
  
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    //localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => 
          item.id === id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, {id, qty: 1}]);
    }
  };

const totalPriceRef = useRef(null);

useEffect(() => {
  if (cart.length > 0) {
    totalPriceRef.current.style.display= "table-row";
  } else {
    totalPriceRef.current.style.display= "none";
  }
});

  return (
    <Fragment>
      <div className="flex justify-between items-center h-20 bg-blue-600 text-white px-4 md:px-10">
        <span className="text-sm md:text-base">{username}</span>
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center py-5 px-4 md:px-0">
        <div className="w-full md:w-4/6 flex flex-wrap gap-4">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-full md:w-2/6 mt-5 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto border-separate border-spacing-x-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&  cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>$ {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * product.price}</td>
                    </tr>
                  );
                })}
                <tr ref={totalPriceRef}>
                  <td colSpan="3">
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      $ {totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;