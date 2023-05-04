import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedProducts = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <ul>{renderedProducts}</ul>;
};

export default ProductList;
