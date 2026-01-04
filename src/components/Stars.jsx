import React from "react";
import Image from "next/image";
import StarTeeth from "../app/images/stars.png";
import Star from "./Star";

import "./styles/stars.css";
export default function Stars() {
  return (
    <ul className="starContainer">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </ul>
  );
}
