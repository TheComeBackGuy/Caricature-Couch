import React from "react";
import ParkingGarage from "../../src/app/images/Parking Garage.png";
import Image from "next/image";
import "./styles/parking.css";
import GlobalHref from "./GlobalHref";

export default function Parking() {
  return (
    <div className="parking-container">
      <h1>Where to park</h1>
      <div className="parking-body">
        <div className="image-holder">
          <Image
            src={ParkingGarage}
            alt={"Illustration of a parking garage"}
            width={1400}
            height={724}
            className="parking-image"
          />
        </div>
        <div className="text-body-container">
          <p>
            We suggest parking in the Chattanooga Parking Authority garage
            located right next to the Chattanooga Choo Choo. Unless there is a
            special event happening, your first hour is free and it caps at $15
            for the day!
          </p>
          <GlobalHref
            text="Get Directions"
            url="https://maps.app.goo.gl/xYrXdt6e4MNN4Y1m7"
          />
        </div>
      </div>
    </div>
  );
}
