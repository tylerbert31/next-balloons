import React from "react";
import Header from "../header/header";
import SearchModal from "../modal/search";
import UpperSection from "@/components/UpperPageSection/UpperSection";
import Footer from "../footer/footer";

const BodyTemplate = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen m-0 p-0">
      <div className="max-w-[430px] flex flex-col w-svw">
        <Header />
        <UpperSection />
        {children}
        <Footer />
        <SearchModal />
      </div>
    </div>
  );
};

export default BodyTemplate;
