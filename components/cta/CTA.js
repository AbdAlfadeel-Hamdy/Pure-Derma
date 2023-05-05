import SignupForm from "../forms/SignupForm";
import HeadingSecondary from "../ui/HeadingSecondary";

const CTA = () => {
  return (
    <section className="py-8 px-4">
      <div className="px-2">
        <HeadingSecondary className="mb-8">انضم إلينا</HeadingSecondary>
        <SignupForm />
      </div>
    </section>
  );
};

export default CTA;
