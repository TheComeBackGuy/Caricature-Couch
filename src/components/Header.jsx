import React from "react";
import "./styles/header.css";
import Polaroid from "./Polaroid";
import StickerLogo from "../app/images/logo-sticker.png";
import Image from "next/image";
import Link from "next/link";
import MenuList from "./MenuList";
export default function Header() {
  return (
    <header>
      {/* <div className="logoContainer"> */}
      <Link
        href={"/"}
        className="logoContainer"
        // style={{
        //   display: "flex",
        //   position: "relative",
        //   width: "400px",
        //   height: "200px",
        // }}
      >
        <Image
          src={StickerLogo}
          alt="Hartsyfartsy's Caricature Couch Logo"
          fill={true}
          style={{ objectFit: "contain" }}
          loading="lazy"
          decoding="async"
          sizes="
		(min-width: 1460px) 500px,
		(min-width: 1220px) calc(91.36vw - 816px),
		(min-width: 720px) calc(4.17vw + 450px),
		(min-width: 420px) calc(96.43vw - 175px),
		210px
	"
        />
      </Link>
      {/* </div> */}
      {/* <div className="hdr-menu">
        <Link href={"/VisitUs"} className="menu-link">
        Visit us
        </Link>
        <Link href={"/Products"} className="menu-link">
        Products
        </Link>
        </div> */}
      <MenuList />
    </header>
  );
}
