import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 sm:px-0 max-w-[280px] sm:max-w-none mx-auto">
      {renderedProducts}
    </ul>
  );
};

export default ProductList;
