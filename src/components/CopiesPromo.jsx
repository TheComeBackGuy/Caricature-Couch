import React from "react";
import Image from "next/image";
import Copies from "../app/images/copies2.jpg";
import "./styles/copiesPromo.css";

export default function CopiesPromo() {
  return (
    <div className="copiesContainer">
      <div className="containerBorder">
        <div className="copiesImageContainer">
          <Image
            src={Copies}
            alt="A girl getting attacked by a vindictive printer"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <h2
          style={{
            color: "var(--white)",
            backgroundColor: "var(--rainbowRed)",
            padding: "0 20px",
          }}
        >
          Okay, we're being dramatic
        </h2>
        <p className="copiesP">
          We just love that we can now give you high-quality copies of your
          caricatures.
        </p>
      </div>
    </div>
  );
}
