import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { API_SERVER } from "@/lib/constants";
import Link from "next/link";

const HeaderForm = () => {
  const [term, setTerm] = useState("");
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const changeTermHandler = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };
  const searchProductsHandler = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm("");
  };
  const renderedProducts = products.map((product) => {
    return (
      <li key={product.id} className="border-b last-of-type:border-none">
        <Link
          href={`/products/${product.id}`}
          className="block py-2 px-4  hover:bg-gray-light-1 active:bg-gray-light-1 text-gray-dark-3 hover:text-gray-dark-2 active:text-gray-dark-2 duration-200"
        >
          {product.name}
        </Link>
      </li>
    );
  });
  useEffect(() => {
    let timer;
    const loadProducts = () => {
      timer = setTimeout(async () => {
        if (!term) return setProducts([]);
        const response = await axios.get("/products", {
          params: {
            keyword: term,
          },
          baseURL: API_SERVER,
          withCredentials: true,
        });
        const { data } = response;
        setProducts(data.doc);
      }, 1 * 1000);
    };
    loadProducts();

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  return (
    <form className="flex items-center justify-center flex-[0_0_100%] sm:flex-[0_0_40%] order-1 sm:-order-none mt-2 sm:mt-0 relative">
      <input
        type="text"
        name="search"
        dir="rtl"
        placeholder="ابحث عن منتج"
        className="bg-gray-light-2 flex-[0_0_100%] sm:flex-[0_0_100%] duration-200 sm:rounded-full border-none outline-none ltr:ml-8 rtl:-ml-8 py-[6px] px-4 text-right text-base sm:text-lg caret-primary "
        value={term}
        onChange={changeTermHandler}
      />
      <button
        name="search-product"
        className="bg-gray-light-2 ml-4"
        onClick={searchProductsHandler}
      >
        <IoSearch className=" w-4 sm:w-6 h-4 sm:h-6" />
      </button>
      {term && !!products.length && (
        <ul
          className="w-full sm:w-[calc(100%-1rem)] absolute text-gray-dark-2 bg-white top-full z-20 sm:rounded-lg"
          dir="ltr"
          onClick={() => setTerm("")}
        >
          {renderedProducts}
        </ul>
      )}
    </form>
  );
};

export default HeaderForm;
