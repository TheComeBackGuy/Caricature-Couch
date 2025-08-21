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
      >
        x
      </div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowTurquoise)" }}
      >
        x
      </div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowYellow)" }}
      >
        x
      </div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowOrange)" }}
      >
        x
      </div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowRed)" }}
      >
        x
      </div>
    </div>
  );
}
