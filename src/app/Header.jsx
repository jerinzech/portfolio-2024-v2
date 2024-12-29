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
      <div className="headerlayout bg-green-500 h-[10%] flex flex-row justify-center items-center">
        <div className="logo-header">Jerin James</div>
        <div className="staricon">star</div>
        <div className="button-container flex flex-row">
          <div className="studio-button-container">
            <button className="studio-button bg-green-950 h-16 w-44">
              studio
            </button>
          </div>
          <div className="resume-button-container">
            <button className="resume-button bg-black h-16 w-44">resume</button>
          </div>
        </div>
      </div>
    </>
  );
}
