import Gallery from "@/components/gallery/Gallery";
import Overview from "@/components/overview/Overview";
import TopProducts from "@/components/top-products/TopProducts";
import Head from "next/head";
import { useState } from "react";

export default function Home({ products }) {
  const [mainProducts, setMainProducts] = useState(products);
  console.log(mainProducts);
  return (
    <>
      <Head>
        <title>Pure Derma Egypt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <Gallery />
      <Overview />
      <TopProducts products={products} />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      products: data.products,
    },
  };
}
