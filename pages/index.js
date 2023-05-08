import CTA from "@/components/cta/CTA";
import Gallery from "@/components/gallery/Gallery";
// import Overview from "@/components/overview/Overview";
import TopProducts from "@/components/top-products/TopProducts";

export default function Home({ products }) {
  return (
    <>
      <Gallery />
      {/* <Overview /> */}
      <TopProducts products={products} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return {
    props: {
      products: data.products,
    },
  };
}
