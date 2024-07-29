import Button from "../components/Elements/Button/";
import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          exercitation eu reprehenderit laboris non velit consectetur proident aute mollit aute enim tempor sunt irure mollit ipsum proident voluptate ullamco
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          exercitation eu reprehenderit laboris non velit consectetur proident aute mollit aute enim tempor sunt irure mollit ipsum proident voluptate ullamco
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;