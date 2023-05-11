import CTA from "@/components/cta/CTA";
import Gallery from "@/components/gallery/Gallery";
// import Overview from "@/components/overview/Overview";
import TopProducts from "@/components/top-products/TopProducts";
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
      {/* <Overview /> */}
      <TopProducts products={renderedProducts} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get("/products", {
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
  });
  console.log(response);
  const { data } = response;

  return {
    props: {
      products: data.doc,
    },
  };
}
