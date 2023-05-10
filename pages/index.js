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

export async function getServerSideProps() {
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
