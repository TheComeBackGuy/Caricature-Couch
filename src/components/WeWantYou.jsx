import Image from "next/image";
import React from "react";
import You from "../app/images/we want you.png";
import "./styles/we-want-you.css";
import GlobalHref from "./GlobalHref";

export default function WeWantYou() {
  return (
    <div className="poster-container">
      <div className="poster-red">
        <div className="poster-blue">
          <div>
            <div className="image-contianer">
              <Image
                src={You}
                className="picture"
                alt="parody of the we want you poster"
              />
            </div>
            <h1>WE WANT YOU</h1>
            <h3>TO GET DRAWN</h3>
            <GlobalHref url="./Appointments" text="Book an Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
}
