import Header from "@/components/header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-light-1 lg:my-20 lg:mx-auto max-w-7xl ">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
