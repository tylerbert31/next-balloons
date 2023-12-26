import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await response.json();
  return products;
};

export default async function Product() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <div className="body flex flex-wrap gap-7 justify-center py-10">
        {products.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <Card product={product} key={index} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
