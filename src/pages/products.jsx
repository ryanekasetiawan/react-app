import {Fragment} from "react";
import Button from "../components/Elements/Button/";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: "Rp 1.000.000",
    description: "exercitation eu reprehenderit laboris non velit consectetur proident aute mollit aute enim tempor sunt irure mollit ipsum proident voluptate ullamco"
  },
  {
    id: 2,
    name: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: "Rp 500.000",
    description: "exercitation eu reprehenderit laboris non velit"
  },
  {
    id: 3,
    name: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: "Rp 500.000",
    description: "exercitation eu reprehenderit laboris non velit"
  }
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  
  return (
    <Fragment>
      <div className="flex justify-end h-16 md:h-20 bg-blue-600 text-white items-center px-2 md:px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
      </div>
      <div className="flex w-100 justify-center py-5">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductPage;