import ProductList from "@/components/product/ProductList";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishlist = useSelector((state) => state.auth.wishlist);
  const rendredWishlist = wishlist.map((product) => ({
    ...product,
    isFavorite: true,
  }));
  if (!wishlist.length)
    return (
      <p className="text-center text-sm sm:text-lg lg:text-2xl">
        لم اقم بإضافة أي منتج للمفضلة
      </p>
    );

  return <ProductList products={rendredWishlist} />;
};

export default WishList;
