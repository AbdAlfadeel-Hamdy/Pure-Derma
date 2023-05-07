import HeadingSecondary from "../ui/HeadingSecondary";
import CartList from "./CartList";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const totalCartItems = useSelector((state) => state.cart.totalCartItems);

  return (
    <section className="py-8 sm:pt-10 lg:py-12 px-8">
      <HeadingSecondary className="pb-8">سلة المشتروات</HeadingSecondary>
      {!totalCartItems && (
        <p className="text-center text-sm sm:text-lg lg:text-2xl">
          لم تقم بإضافة أي منتج
        </p>
      )}
      {!!totalCartItems && (
        <>
          <CartList />
          <div className="border-t border-gray-light-2 flex justify-between pt-6">
            <span>مجموع التكلفة</span>
            <span>{totalCartPrice}</span>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
