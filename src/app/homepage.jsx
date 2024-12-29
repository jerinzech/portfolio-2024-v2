import React from "react";
import Header from "./Header";
import BentoBody from "./BentoBody";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <div className="homepageclass h-screen">
        <div className="bg-green-500 h-[10%] flex flex-row place-content-around">
          <Header />
        </div>

        <BentoBody />
        <Footer />
      </div>
    </>
  );
}
