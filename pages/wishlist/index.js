import HeadingSecondary from "@/components/ui/HeadingSecondary";
import WishList from "@/components/wish-list/WishList";
const Wishlist = () => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16">
      <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        قائمة المفضلة
      </HeadingSecondary>
      <WishList />
    </section>
  );
};

export default Wishlist;
