import BodyTemplate from "@/components/BodyTemplate/BodyTemplate";
import Card from "@/components/card/card";
import CardSkeletons from "@/components/card/cardSkeletons";
import Paginator from "@/components/pagination/Paginator";

export default function Home() {
  return (
    <BodyTemplate>
      <div className="grid grid-cols-2 gap-4 my-2 mx-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} cardId={i} />
        ))}
        {Skeletons()}
      </div>
      <Paginator pages={5} current={2} />
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
