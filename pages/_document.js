import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head />
      <body className=" text-gray-dark-2 bg-gradient-to-br from-primary-light to-primary-dark bg-cover bg-no-repeat min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
