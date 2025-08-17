import React from "react";
import Image from "next/image";
import "./styles/promoSmall.css";
export default function PromoSmall({ img, hdr, text }) {
  console.log(text);
  return (
    <div>
      <div className="promoSmallCircle">
        <Image
          src={img}
          alt="shop pic"
          // width={409} height={209}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2>{hdr}</h2>
      <p>{text}</p>
    </div>
  );
}
