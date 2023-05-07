import Link from "next/link";
import SigninForm from "@/components/forms/SigninForm";
import HeadingSecondary from "@/components/ui/HeadingSecondary";

const SigninPage = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-12">
      <HeadingSecondary className="mb-8">تسجيل الدخول</HeadingSecondary>
      <SigninForm />
      <p className="text-center mt-4 sm:mt-8 lg:mt-12">
        <span> إذا كنت لا تمتلك حساب قم ب</span>
        <Link
          href="/auth/signup"
          className="underline text-primary hover:text-primary-dark duration-200"
        >
          إنشاء واحد
        </Link>
      </p>
    </section>
  );
};

export default SigninPage;
