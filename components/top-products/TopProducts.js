import ProductList from "../product/ProductList";
import HeadingSecondary from "../ui/HeadingSecondary";

const TopProducts = ({ products }) => {
  return (
    <section className="py-8 sm:py-10 px-8 lg:py-12 text-center border-b border-gray-light-2">
      <div className="px-2">
        <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12">
          أفضل المنتجات
        </HeadingSecondary>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default TopProducts;
