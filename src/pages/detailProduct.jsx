import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import LoadingButton from "../components/Elements/LoadingButton";
import { DarkMode } from "../context/DarkMode";
import DarkModeButton from "../components/Elements/DarkModeButton";

const DetailProductPage = () => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className={`min-h-screen flex justify-center items-center ${isDarkMode && "bg-slate-900"}`}>
        <LoadingButton />
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen flex justify-center items-center p-4 ${isDarkMode && "bg-slate-900"}`}>
      <div className="absolute right-4 top-4 z-10">
        <DarkModeButton />
      </div>
      {product && (
        <div className="flex flex-col md:flex-row mt-14 font-sans max-w-xl bg-white shadow-md rounded-lg overflow-hidden border-2 border-slate-200">
          <div className="flex-none w-full md:w-48 relative">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <form className={`flex-auto p-6 ${isDarkMode && "bg-slate-900"}`}>
            <div className="flex flex-wrap">
              <h1 className={`w-full text-lg font-semibold text-slate-900 ${isDarkMode && "text-white"}`}>
                {product.title}
              </h1>
              <div className={`w-full text-lg font-semibold text-slate-500 mt-2 ${isDarkMode && "text-white opacity-80"}`}>
                ${product.price}
              </div>
              <div className={`w-full text-sm font-medium text-slate-700 mt-2 ${isDarkMode && "text-white opacity-90"}`}>
                Review {product.rating.rate}/5 ({product.rating.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className={`space-y-2 text-sm ${isDarkMode && "text-white"}`}>
                {product.description}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6 text-sm font-medium">
              <button className={`
                h-10 px-6 font-semibold rounded-md bg-black text-white ${isDarkMode 
                && "bg-white text-black"}`} type="submit">
                Buy now
              </button>
              <button className={`
                h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 ${isDarkMode 
                && "text-white"}`} type="button">
                Add to bag
              </button>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className={`text-sm text-slate-700 ${isDarkMode && "text-white opacity-90"}`}>
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;