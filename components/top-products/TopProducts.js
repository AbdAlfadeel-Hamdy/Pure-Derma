import ProductList from "../product/ProductList";
import HeadingSecondary from "../ui/HeadingSecondary";

const TopProducts = ({ products }) => {
  return (
    <section className="py-12 text-center">
      <div className="px-2">
        <HeadingSecondary>أفضل المنتجات</HeadingSecondary>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default TopProducts;
