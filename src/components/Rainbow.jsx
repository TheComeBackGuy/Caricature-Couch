"use client";

import React, { useRef, useEffect, useState } from "react";
import "../app/globals.css";
import "../app/page.module.css";
import StickerColumn from "./StickerColumn";

export default function Rainbow({ side }) {
  const divRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });
  function whichSide(side) {
    let direction;
    if (side == "left") {
      direction = "row-reverse";
    } else if (side == "right") {
      direction = "row";
    }
    return direction;
  }

  useEffect(() => {
    if (divRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setDivSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
        console.log(divSize);
      });
      resizeObserver.observe(divRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  console.log(divSize);

  return (
    <div
      ref={divRef}
      className="rainbowContainer"
      style={{ flexFlow: whichSide(side) }}
    >
      <StickerColumn divSizes={divSize} />
      <div
        className="rainbowStripe"
        style={{
          backgroundColor: "var(--rainbowBlue)",
        }}
      ></div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowTurquoise)" }}
      ></div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowYellow)" }}
      ></div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowOrange)" }}
      ></div>
      <div
        className="rainbowStripe"
        style={{ backgroundColor: "var(--rainbowRed)" }}
      ></div>
    </div>
  );
}
