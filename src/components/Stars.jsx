import React from "react";
import Image from "next/image";
import StarTeeth from "../app/images/stars.png";

import "./styles/stars.css";
export default function Stars() {
  return (
    <div className="starContainer">
      {/* <div className="imageContainer" style={{}}>
        <Image
          src={StarTeeth}
          alt="Me with stars in my mouth"
          fill
          srcSet="image-400.jpg 400w, image-262.jpg 262w, image-200.jpg 200w, image-1280.jpg 1280w"
          sizes="(max-width: 400px) 25vw, (max-width: 700px) 50vw, 254px"
        />
      </div> */}
      <div className="reviewContainer">
        <ul>
          <li>
            <img
              src="../images/starsWhite.gif"
              alt="one review star"
              className="star"
            />{" "}
            <img
              src="../images/starsWhite.gif"
              alt="one review star"
              className="star"
            />{" "}
            <img
              src="../images/starsWhite.gif"
              alt="one review star"
              className="star"
            />{" "}
            <img
              src="../images/starsWhite.gif"
              alt="one review star"
              className="star"
            />{" "}
            <img
              src="../images/starsWhite.gif"
              alt="one review star"
              className="star"
            />
          </li>
        </ul>
        <h1>
          People are <span style={{ color: "var(--rainbowRed" }}>l</span>
          <span style={{ color: "var(--rainbowOrange" }}>o</span>
          <span style={{ color: "var(--rainbowYellow" }}>v</span>
          <span style={{ color: "var(--rainbowTurquoise" }}>i</span>
          <span style={{ color: "var(--rainbowYellow" }}>n</span>
          <span style={{ color: "var(--rainbowOrange" }}>g</span> us!
        </h1>
        <p>
          "Oh man. These folks are great. Had a family portrait done and we
          laughed so hard! Was so much fun. Highly recommend!"
        </p>
        <cite>Brian</cite>
        <button> Read All Our Reviews!</button>
      </div>
    </div>
  );
}
