import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import store from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="bg-gray-light-1 lg:mx-auto ">
        <Header />
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
          <Navbar />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Provider>
  );
}
