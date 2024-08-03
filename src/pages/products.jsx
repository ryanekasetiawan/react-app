import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import {getProducts} from "../services/product.service";
import {useLogin} from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();
  
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-center py-5 px-4 md:px-0">
        <div className="w-full md:w-4/6 flex flex-wrap gap-4">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <CardProduct.Header image={product.image} id={product.id} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-full md:w-2/6 mt-5 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <div className="overflow-x-auto">
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;