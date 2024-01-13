import Header from "@/components/header/header";
import Body from "./body";
import SearchModal from "@/components/modal/search";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen m-0 p-0">
      <div className="max-w-[430px] flex flex-col w-svw">
        <Header />
        <Body />
        <SearchModal />
      </div>
    </div>
  );
}
