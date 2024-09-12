import React from "react";

export default function BentoBody() {
  return (
    <>
      <BentoLayout />
    </>
  );
}

function BentoLayout() {
  return (
    <div className="headerlayout bg-blue-500 h-[88%] flex flex-row place-content-around">
      BentoLayout inside
    </div>
  );
}
