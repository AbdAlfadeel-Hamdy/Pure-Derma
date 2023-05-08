import CTA from "@/components/cta/CTA";
import Gallery from "@/components/gallery/Gallery";
// import Overview from "@/components/overview/Overview";
import TopProducts from "@/components/top-products/TopProducts";
import axios from "axios";

export default function Home({ products }) {
  return (
    <>
      <Gallery />
      {/* <Overview /> */}
      <TopProducts products={products} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios("/products", {
    baseURL: "https://dummyjson.com",
    withCredentials: true,
  });
  const { data } = response;

  return {
    props: {
      products: data.products,
    },
  };
}
