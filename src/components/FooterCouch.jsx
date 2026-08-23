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
            alt={"customer Illustration"}
            className={"guest"}
            width={970}
            height={637}
          />
        </div>
        <div className="couchImageContainer">
          <Image
            src={Couch}
            alt="the couch of the caricature couch"
            width={970}
            height={637}
            className="couch"
            sizes="(min-width: 1580px) 1220px, (min-width: 920px) calc(90.63vw - 194px), (min-width: 720px) calc(100vw - 160px), (min-width: 420px) calc(100vw - 110px), 290px"
            srcSet="
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=640&q=75 640w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=750&q=75 750w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=828&q=75 828w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=1080&q=75 1080w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=1200&q=75 1200w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=1920&q=75 1920w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=2048&q=75 2048w,
          /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-couch.de94e89f.png&w=3840&q=75 3840w
          "
          />
        </div>
      </div>
    </div>
  );
}
