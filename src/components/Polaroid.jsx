import React from "react";
// import "../app/globals.css";
import "./styles/polaroid.css";
import Image from "next/image";
import Pin from "@/app/images/pin.gif";

export default function Polaroid({ rotate, image, imageAlt, text }) {
  function location() {
    return (
      <>
        <Image
          src={Pin}
          alt="a map pin"
          loading="eager"
          width="29"
          height="41"
          style={{ margin: "10px" }}

          // placeholder="blur"
        />
        <p>
          1400 Market Street
          <br /> Chattanooga, TN 37405
        </p>
      </>
    );
  }

  return (
    <div className="polaroid" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="polaroidPicture">
        {/* <img src={`/polaroids/pol-${image}.jpg`} alt={imageAlt} /> */}
        <Image
          src={`/polaroids/pol-${image}.webp`}
          alt={imageAlt}
          fill
          sizes="(max-width: 600px) 100vw, 395px"
        />
      </div>
      <div className="polaroidText">{text}</div>
      {/* <div className="polaroidText">{text ? text : location()}</div> */}
    </div>
  );
}
