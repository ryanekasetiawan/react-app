import { Fragment, useState } from "react";
import Button from "../components/Elements/Button/";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: 1000000,
    description: "exercitation eu reprehenderit laboris non velit consectetur proident aute mollit aute enim tempor sunt irure mollit ipsum proident voluptate ullamco"
  },
  {
    id: 2,
    name: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: 500000,
    description: "exercitation eu reprehenderit laboris non velit"
  },
  {
    id: 3,
    name: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: 2000000,
    description: "exercitation eu reprehenderit laboris non velit"
  }
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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

  return (
    <Fragment>
      <div className="flex justify-between items-center h-20 bg-blue-600 text-white px-4 md:px-10">
        <span className="text-sm md:text-base">{email}</span>
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center py-5 px-4 md:px-0">
        <div className="w-full md:w-4/6 flex flex-wrap gap-4">
          {products.map((product) => (
            <CardProduct key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
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
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>Rp {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;