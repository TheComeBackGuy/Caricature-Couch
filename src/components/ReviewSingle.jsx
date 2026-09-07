"use client";

import React from "react";
import Image from "next/image";

import "./styles/review.css";
import Stars from "./Stars";
export default function ReviewSingle({ author, review, pic }) {
  return (
    <div className="singleReviewContainerBorder">
      <div className="singleReviewContainer">
        <Stars />
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            // borderRadius: "20px",
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
          <cite style={{ topMargin: "20px" }}>-{author}</cite>
        </div>
      </div>
    </div>
  );
}
