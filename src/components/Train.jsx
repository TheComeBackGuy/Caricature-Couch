import React from "react";
import TrainImage from '../app/images/train.png';
import Image from "next/image";
export default function Train() {
  return (
    <div className="threeColumn">
      <div className="left">
        <h1>Our New Location</h1>
        <p>
          You no longer have to endure the chilling cold or the oppresive heat
          to get a great caricature. We are located in the red space inside the
          atrium of the historic Chattanooga Choo Choo.
          <cite className="address"> 1400 Market St #126, Chattanooga, TN 37402</cite>
        </p>
      </div>
      <div>2</div>
      <div className="right" style={{marginLeft: '-40px', zIndex:'300'}} ><Image src={TrainImage} alt="A Cartoon Train" /></div>
    </div>
  );
}
