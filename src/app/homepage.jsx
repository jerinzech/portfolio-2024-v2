import React from "react";
import Header from "./Header";
import BentoBody from "./BentoBody";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <div className="homepageclass h-screen">
        <Header />
        <BentoBody />
        <Footer />
      </div>
    </>
  );
}
