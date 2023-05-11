import HeadingSecondary from "@/components/ui/HeadingSecondary";
import WishList from "@/components/wish-list/WishList";
const Wishlist = () => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 flex flex-col gap-8 sm:gap-10 lg:gap-12 ">
      <HeadingSecondary>قائمة المفضلة</HeadingSecondary>
      <WishList />
    </section>
  );
};

export default Wishlist;
