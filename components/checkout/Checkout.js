import CheckoutForm from "../forms/CheckoutForm";
import HeadingSecondary from "../ui/HeadingSecondary";
import CheckoutSummary from "./CheckoutSummary";
const Checkout = () => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16">
      <HeadingSecondary className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        قائمة الشراء
      </HeadingSecondary>
      <div className="sm:flex md:gap-8 gap-4">
        <CheckoutSummary />
        <CheckoutForm className="flex-1 md:mx-0 lg:self-start" />
      </div>
    </section>
  );
};

export default Checkout;
