import React from "react";
import Image from "next/image";
import StarTeeth from "../app/images/stars.png";

import "./styles/stars.css";
export default function Stars() {
  return (
    <div className="starContainer">
      <ul>
        <li>
          <img
            src="../images/stars.gif"
            alt="one review star"
            className="star"
          />{" "}
        </li>
        <li>
          <img
            src="../images/stars.gif"
            alt="one review star"
            className="star"
          />{" "}
        </li>
        <li>
          <img
            src="../images/stars.gif"
            alt="one review star"
            className="star"
          />
        </li>{" "}
        <li>
          <img
            src="../images/stars.gif"
            alt="one review star"
            className="star"
          />{" "}
        </li>
        <li>
          <img
            src="../images/stars.gif"
            alt="one review star"
            className="star"
          />
        </li>
      </ul>
      <button> Read All Our Reviews!</button>
    </div>
  );
}
