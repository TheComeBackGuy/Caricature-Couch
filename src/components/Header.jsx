import React from "react";
import "./styles/header.css";
import Polaroid from "./Polaroid";
import StickerLogo from "../app/images/logo-sticker.png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Image
          src={StickerLogo}
          alt="Hartsyfartsy's Caricature Couch Logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
    </header>
  );
}
