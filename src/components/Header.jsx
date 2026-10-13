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
      <div className="logoContainer">
        <Link href={"/"}>
          <Image
            src={StickerLogo}
            alt="Hartsyfartsy's Caricature Couch Logo"
            fill
            data-nimg="fill"
            loading="lazy"
            decoding="async"
            style="0:p;1:o;2:s;3:i;4:t;5:i;6:o;7:n;8::;9:a;10:b;11:s;12:o;13:l;14:u;15:t;16:e;17:;;18:h;19:e;20:i;21:g;22:h;23:t;24::;25:1;26:0;27:0;28:%;29:;;30:w;31:i;32:d;33:t;34:h;35::;36:1;37:0;38:0;39:%;40:;;41:l;42:e;43:f;44:t;45::;46:0;47:;;48:t;49:o;50:p;51::;52:0;53:;;54:r;55:i;56:g;57:h;58:t;59::;60:0;61:;;62:b;63:o;64:t;65:t;66:o;67:m;68::;69:0;70:;;71:c;72:o;73:l;74:o;75:r;76::;77:t;78:r;79:a;80:n;81:s;82:p;83:a;84:r;85:e;86:n;87:t;position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="
		(min-width: 1460px) 500px,
		(min-width: 1220px) calc(91.36vw - 816px),
		(min-width: 720px) calc(4.17vw + 450px),
		(min-width: 420px) calc(96.43vw - 175px),
		210px
	"
          />
        </Link>
      </div>
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
