import SearchProducts from "@/components/search/SearchProducts";
import { API_SERVER } from "@/lib/constants";
import axios from "axios";

const SearchPage = ({ products }) => {
  return <SearchProducts products={products} />;
};

export async function getServerSideProps(context) {
  const serchTerm = context.query.term;
  const response = await axios.get("/products", {
    params: {
      keyword: serchTerm,
    },
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

export default SearchPage;
