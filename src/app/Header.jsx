import React from "react";

export default function Header() {
  return (
    <>
      <HeaderLayout />
    </>
  );
}

export function HeaderLayout() {
  return (
    <>
      <div className="headerlayout bg-green-500 h-[10%] flex flex-row place-content-around">
        <div className="">name</div>
        <div className="">star</div>
        <div className="">studio-button</div>
        <div className="">resume-button</div>
      </div>
    </>
  );
}
