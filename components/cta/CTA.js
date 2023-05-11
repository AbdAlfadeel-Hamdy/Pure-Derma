import SignupForm from "../forms/SignupForm";
import HeadingSecondary from "../ui/HeadingSecondary";

const CTA = () => {
  return (
    <section className="p-8 sm:p-10 lg:p-12 xl:p-16">
      <HeadingSecondary className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        انضم إلينا
      </HeadingSecondary>
      <SignupForm />
    </section>
  );
};

export default CTA;
