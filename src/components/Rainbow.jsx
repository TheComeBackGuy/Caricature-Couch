import React from "react";
import "../app/globals.css";
import "../app/page.module.css";
import Image from "next/image";
import StickerColumn from "./StickerColumn";

export default function Rainbow({ side }) {
  function whichSide(side) {
    let direction;
    if (side == "left") {
      direction = "row-reverse";
    } else if (side == "right") {
      direction = "row";
    }
    return direction;
  }

  return (
    <div className="rainbowContainer" style={{ flexFlow: whichSide(side) }}>
      {/* <StickerColumn /> */}
      <div
        className="rainbowStripe"
        style={{
          backgroundColor: "var(--rainbowBlue)",
        }}
      />
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowTurquoise)" }}
      />
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowYellow)" }}
      />
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowOrange)" }}
      />
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowRed)" }}
      />
    </div>
  );
}
