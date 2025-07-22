import React from "react";
import Couch from "../app/images/footer-couch.png";
import "./styles/couch.css";
import Image from "next/image";
import Rainbow from "./Rainbow";

export default function FooterCouch() {
  return (
    <div className="couchContainer">
      <Rainbow side="left" />
      <div className="couchImageContainer">
        <Image
          src={Couch}
          alt="the couch of the caricature couch"
          // height={450}
          // width={970}
          // styles={{ objectFit: "cover" }}
          fill
        />
      </div>
      <Rainbow side="right" />
    </div>
  );
}
