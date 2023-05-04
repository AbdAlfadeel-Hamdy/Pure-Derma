import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head />
      <body className="font-mixed text-gray-dark-2 leading-relaxed bg-gradient-to-br from-primary-light to-primary-dark bg-cover bg-no-repeat min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
