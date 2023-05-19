import SkincareProducts from "@/components/skincare/Skincare";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";

const SkinCarePage = ({ products }) => {
  return <SkincareProducts products={products} />;
};

export async function getStaticProps() {
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
}

export default SkinCarePage;
