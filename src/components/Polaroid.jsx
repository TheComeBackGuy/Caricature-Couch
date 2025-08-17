import React from "react";
// import "../app/globals.css";
import "./styles/polaroid.css";
import Image from "next/image";
// import Pol1 from "../app/images/polaroids/pol-1.jpg";
// import Pol2 from "../images/polaroids/pol-2.jpg";
import Pin from "../app/images/pin.gif";

export default function Polaroid({ rotate, image, imageAlt, text }) {
  function location() {
    return (
      <>
        <Image src={Pin} alt="pin drop" style={{ margin: "10px" }} />
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
        <Image src={`/polaroids/pol-${image}.jpg`} alt={imageAlt} fill />
      </div>
      <div className="polaroidText">{text ? text : location()}</div>
    </div>
  );
}
