import React from "react";

export default function Footer() {
  return (
    <>
      <FooterLayout />
    </>
  );
}

function FooterLayout() {
  return (
    <div className="headerlayout bg-red-500 h-[2%] flex flex-row place-content-around">
      Footer
    </div>
  );
}
