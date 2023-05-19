import HeadingSecondary from "../ui/HeadingSecondary";
import ProductList from "../product/ProductList";

const HaircareProducts = ({ products }) => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16 border-b border-gray-light-2">
      <div className="px-2">
        <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          منتجات العناية بالشعر
        </HeadingSecondary>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default HaircareProducts;
