import SkincareProducts from "@/components/skincare/Skincare";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";
import { useSelector } from "react-redux";

const SkinCarePage = ({ products }) => {
  const wishlist = useSelector((state) => state.auth.wishlist);
  const wishlistIds = wishlist.map((product) => product.id);
  const renderedProducts = products.map((product) => {
    if (wishlistIds.includes(product.id))
      return { ...product, isFavorite: true };
    else return { ...product, isFavorite: false };
  });
  return <SkincareProducts products={renderedProducts} />;
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "/products?category=6454fe220bbe3cf2b788cb04",
      {
        baseURL: API_SERVER,
        withCredentials: true,
      }
    );
    const { data } = response;

    return {
      props: {
        products: data.doc,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default SkinCarePage;
