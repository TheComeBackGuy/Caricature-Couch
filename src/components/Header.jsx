import React from "react";
import "./styles/header.css";
import Polaroid from "./Polaroid";
import StickerLogo from "../app/images/logo-sticker.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="hdr-menu">
        <Link href={"/Contact"} className="menu-link">
          {" "}
          Contact
        </Link>
        <Link href={"/AboutUs"} className="menu-link">
          About Us
        </Link>
      </div>
      <div className="logoContainer">
        <Link href={"/"}>
          <Image
            src={StickerLogo}
            alt="Hartsyfartsy's Caricature Couch Logo"
            fill
            // style={{ position: "relative" }}
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
      <div className="hdr-menu">
        <Link href={"/VisitUs"} className="menu-link">
          Visit us
        </Link>
        <Link href={"/Products"} className="menu-link">
          Products
        </Link>
      </div>
    </header>
  );
}
