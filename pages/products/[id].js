import ProductItemPage from "@/components/product/ProductItemPage";
import { API_SERVER } from "@/lib/constants";
import axios from "axios";
const ProductPage = ({ product }) => {
  return <ProductItemPage product={product} />;
};
export default ProductPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const response = await axios.get(`/products/${id}`, {
    baseURL: API_SERVER,
    withCredentials: true,
  });
  const { data } = response;
  return {
    props: {
      product: data.doc,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get("/products", {
    baseURL: API_SERVER,
    withCredentials: true,
  });
  const { data } = response;
  const paths = data.doc.map((product) => ({
    params: {
      id: product.id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
