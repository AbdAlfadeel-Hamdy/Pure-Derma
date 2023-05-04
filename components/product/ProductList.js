import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedProducts = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 sm:px-0">
      {renderedProducts}
    </ul>
  );
};

export default ProductList;
