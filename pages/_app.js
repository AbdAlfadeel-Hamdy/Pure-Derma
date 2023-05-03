import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-light-1 lg:my-20 lg:mx-auto max-w-7xl ">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
