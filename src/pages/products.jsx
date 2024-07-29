import Button from "../components/Elements/Button/";
import CardProduct from "../components/Fragments/CardProduct"

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

const ProductPage = () => {
  return (
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
  );
};

export default ProductPage;