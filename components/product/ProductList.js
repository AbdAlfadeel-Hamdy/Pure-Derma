import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-x-4 md:gap-y-12 md:px-0 mx-auto">
      {renderedProducts}
    </ul>
  );
};

export default ProductList;
