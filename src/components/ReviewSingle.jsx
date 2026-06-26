"use client";

import React from "react";
import Image from "next/image";

import "./styles/review.css";
import Stars from "./Stars";
export default function ReviewSingle({ author, review, pic }) {
  return (
    <div className="singleReviewContainer">
      <Stars />
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
        }}
      >
        {/* <div className="mouthContainer">
          <Image
            src={pic}
            alt="an open mouth"
            fill
            style={{ objectFit: "contain" }}
          />
        </div> */}
        <p>{review}</p>
      </div>
      <cite style={{ topMargin: "20px" }}>-{author}</cite>
    </div>
  );
}
