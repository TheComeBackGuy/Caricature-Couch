"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Mouth1 from "../app/images/mouth1.png";
import Mouth2 from "../app/images/mouth2.png";
import Mouth3 from "../app/images/mouth3.png";
import "./styles/review.css";
export default function ReviewSingle({ author, review, pic }) {
  const [mouth, setMouth] = useState(Mouth1);

  useEffect(() => {
    switch (pic) {
      case 0:
        setMouth(Mouth1);
        break;
      case 1:
        setMouth(Mouth2);
        break;
      case 2:
        setMouth(Mouth3);
        break;
      default:
    }
  });

  return (
    <div className="singleReviewContainer">
      <h2>{review}</h2>
      <cite style={{ topMargin: "20px" }}>-{author}</cite>
      <div className="mouthContainer">
        <Image
          src={mouth}
          alt="an open mouth"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
