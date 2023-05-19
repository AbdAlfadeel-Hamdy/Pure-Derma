import HaircareProducts from "@/components/haircare/Haircare";
import axios from "axios";
import { API_SERVER } from "@/lib/constants";

const HairCarePage = ({ products }) => {
  return <HaircareProducts products={products} />;
};

export async function getStaticProps() {
  const response = await axios.get(
    "/products?category=6467b2590dcd55b1a25ddf3a",
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
  };
}

export default HairCarePage;
