import HeadingSecondary from "../ui/HeadingSecondary";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import { clearCartAction } from "@/store/cart-actions";
import Button from "../ui/Button";

const Cart = () => {
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCartAction());
  };

  return (
    <section className="pt-8 pb-4 sm:pt-10 sm:pb-5 lg:pt-12 lg:pb-6 xl:pt-16 xl:pb-8 px-2 lg:px-4">
      <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        سلة المشتروات
      </HeadingSecondary>
      {(!totalCartPrice || !loggedInUser) && (
        <p className="text-center text-sm sm:text-lg lg:text-2xl">
          لم تقم بإضافة أي منتج
        </p>
      )}
      {!!totalCartPrice && loggedInUser && (
        <>
          <CartList />

          <div className="border-t border-gray-light-2 flex justify-between lg:flex-col lg:items-center lg:gap-4 pt-4 sm:pt-6 lg:pt-10 px-6 sm:px-12 md:px-16 lg:px-32">
            <span className="sm:text-lg lg:text-2xl">مجموع التكلفة</span>
            <div className="flex gap-2 items-center">
              <span className="font-thin text-xl">{totalCartPrice}</span>
              <span className="text-sm md:text-base ">جنيه</span>
            </div>
          </div>
          <div className="text-center my-4 sm:my-5 lg:my-6 flex items-center justify-center gap-4 sm:gap-8">
            <Button tertiary href="/checkout" className="px-4">
              شراء الآن
            </Button>
            <Button secondary onClick={clearCartHandler} className="px-4">
              حذف العربة
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
