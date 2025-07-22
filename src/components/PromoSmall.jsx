import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
export default function PromoSmall({ img, hdr, text }) {
  return (
    <div className="promoSmallContainer">
      <div className={styles.promoSmallCircle}>
        {/* <img src="../app/images/booth.png" alt="the booth" /> */}
        <Image src={img} alt="shop pic" fill style={{ marginLeft: "15px" }} />
      </div>
      <h2>{hdr}</h2>
      <p>{text}</p>
    </div>
  );
}
