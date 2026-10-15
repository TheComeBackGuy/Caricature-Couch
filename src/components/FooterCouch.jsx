import React from "react";
import Couch from "../app/images/couch-guest-resize.png";
import "./styles/couch.css";
import Image from "next/image";
import Rainbow from "./Rainbow";
import styles from "../app/page.module.css";
import Customer from "../app/images/customer_buff.png";
export default function FooterCouch() {
  return (
    <div className="couchContainer">
      <div className="double-container">
        <div className="customer-container">
          <Image
            src={Customer}
            alt="customer Illustration"
            loading="lazy"
            width="970"
            height="637"
            decoding="async"
            data-nimg="1"
            className="guest"
            sizes="
		(min-width: 1580px) 1220px,
		(min-width: 920px) calc(90.63vw - 194px),
		(min-width: 720px) calc(100vw - 160px),
		(min-width: 420px) calc(100vw - 110px),
		290px
	"
          />
        </div>
        <div className="couchImageContainer">
          <Image
            src={Couch}
            alt="the couch of the caricature couch"
            loading="lazy"
            width="970"
            height="637"
            decoding="async"
            data-nimg="1"
            className="couch"
            sizes="
		(min-width: 1580px) 1220px,
		(min-width: 920px) calc(90.63vw - 194px),
		(min-width: 720px) calc(100vw - 160px),
		(min-width: 420px) calc(100vw - 110px),
		290px
	"
          />
        </div>
      </div>
    </div>
  );
}
