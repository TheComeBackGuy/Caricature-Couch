"use client";
import React, { useState } from "react";
import "./styles/mobileMenu.css";
import Logo from "../app/images/white-mobile-logo.gif";
import Image from "next/image";
import Link from "next/link";
import Menu from "../menu.json";
export default function MobileMenu() {
  const [toggleDisplay, setToggleDisplay] = useState("none");

  function toggle() {
    if (toggleDisplay == "none") {
      setToggleDisplay("flex");
    } else {
      setToggleDisplay("none");
    }
  }

  return (
    <>
      <button onClick={() => toggle()} className="mobile-tab">
        MENU
      </button>
      <div className="mobileMenuContainer" style={{ display: toggleDisplay }}>
        <button onClick={() => toggle()} className="close">
          x
        </button>
        <div className="mobileLogoContainer">
          <Link href="/" onClick={() => toggle()}>
            <Image src={Logo} alt={"Hartsyfartsy'Caricature Couch Logo"} fill />
          </Link>
        </div>
        <div className="mobileMenuList">
          {Menu.map((m, i) => {
            // console.log(m);
            return (
              <Link
                key={i}
                className="mobileMenuItem"
                href={`/${m.url}`}
                onClick={() => toggle()}
              >
                {m.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
