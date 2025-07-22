import React from "react";
// import "../app/globals.css";
import "./styles/polaroid.css";
import Image from "next/image";
import Pol1 from "../app/images/polaroids/pol-1.jpg";
// import Pol2 from "../images/polaroids/pol-2.jpg";

export default function Polaroid({ rotate }) {
  return (
    <div className="polaroid" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="polaroidPicture">
        <Image
          src={Pol1}
          alt="Guests hold up their pictures for the camera"
          fill
        />
      </div>
    </div>
  );
}
