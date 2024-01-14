import BodyTemplate from "@/components/BodyTemplate/BodyTemplate";
import Card from "@/components/card/card";
import CardSkeletons from "@/components/card/cardSkeletons";
import Paginator from "@/components/pagination/Paginator";
import { endpoint } from "@/lib/endpoints";
import api_pass from "@/lib/api_pass";

export async function getProducts(page, limit) {
  limit = limit || 20;
  page = page || 1;
  const response = await fetch(
    `${endpoint}api/products?code=${api_pass}&limit=${limit}&page=${page}`
  );

  const data = await response.json();
  return data.data;
}

export default async function Home() {
  const data = await getProducts();
  const pages = data?.totalPages;
  const currentPage = data?.page;
  return (
    <BodyTemplate>
      <div className="grid grid-cols-2 gap-4 my-2 mx-auto">
        {data &&
          data?.items.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        {!data && Skeletons()}
      </div>
      {pages > 0 && <Paginator pages={pages} current={currentPage} />}
    </BodyTemplate>
  );
}

const Skeletons = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <CardSkeletons key={i} />
      ))}
    </>
  );
};
