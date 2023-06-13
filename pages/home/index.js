import CTA from "@/components/cta/CTA";
import Gallery from "@/components/gallery/Gallery";
import TopProducts from "@/components/top-products/TopProducts";
import { API_SERVER } from "@/lib/constants";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home({ products }) {
  const wishlist = useSelector((state) => state.auth.wishlist);
  const wishlistIds = wishlist.map((product) => product.id);
  const renderedProducts = products.map((product) => {
    if (wishlistIds.includes(product.id))
      return { ...product, isFavorite: true };
    else return { ...product, isFavorite: false };
  });
  return (
    <>
      <Gallery />
      <TopProducts products={renderedProducts} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get("/products", {
      baseURL: API_SERVER,
      withCredentials: true,
    });
    const { data } = response;

    return {
      props: {
        products: data.doc,
      },
    };
  } catch (err) {
    return {
      props: {
        products: [],
      },
    };
  }
}
