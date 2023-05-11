import store from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Head from "next/head";
import MainApp from "@/components/app/MainApp";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pure Derma Egypt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <Provider store={store}>
        <MainApp>
          <Component {...pageProps} />
        </MainApp>
      </Provider>
    </>
  );
}
