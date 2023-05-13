import CheckoutForm from "../forms/CheckoutForm";
import HeadingSecondary from "../ui/HeadingSecondary";
const Checkout = () => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16">
      <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        قائمة الشراء
      </HeadingSecondary>
      <CheckoutForm />
    </section>
  );
};

export default Checkout;
