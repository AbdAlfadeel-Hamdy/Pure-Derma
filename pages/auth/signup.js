import Link from "next/link";

import HeadingSecondary from "@/components/ui/HeadingSecondary";
import SignupForm from "@/components/forms/SignupForm";

const SignupPage = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-12">
      <HeadingSecondary className="mb-8">انضم إلينا</HeadingSecondary>
      <SignupForm />
      <p className="text-center mt-4 sm:mt-8 lg:mt-12">
        <span> إذا كنت تمتلك حساب قم ب</span>
        <Link
          href="/auth"
          className="underline text-primary hover:text-primary-dark duration-200"
        >
          تسجيل الدخول
        </Link>
      </p>
    </section>
  );
};

export default SignupPage;
