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
            <Image
              src={Logo}
              alt={"Hartsyfartsy'Caricature Couch Logo"}
              fill
              sizes="(min-width: 1460px) 500px, (min-width: 1220px) calc(91.36vw - 816px), (min-width: 720px) calc(4.17vw + 450px), (min-width: 420px) calc(96.43vw - 175px), 210px"
              srcSet="
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=256&q=75 256w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=384&q=75 384w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=640&q=75 640w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=750&q=75 750w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=828&q=75 828w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=1080&q=75 1080w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=1200&q=75 1200w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=1920&q=75 1920w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=2048&q=75 2048w,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sticker.8ca31275.png&w=3840&q=75 3840w
	"
            />
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
