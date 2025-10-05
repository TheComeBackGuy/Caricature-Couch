"use client";

import "../app/globals.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Grump from "../../public/images/sticker-grump.png";
import Panda from "../../public/images/red-panda.png";
import Dwight from "../../public/images/dwight.png";
import Sabrina from "../../public/images/sabrina.png";

export default function StickerColumn({ side, divSizes }) {
  const [stickerHeight, setStickerHeight] = useState("0px");
  const [stickerWidth, setStickerWWidth] = useState("0px");

  useEffect(() => {
    // console.log(height.height);
    setStickerHeight(`${Math.round(divSizes.height)}px`);
    setStickerWWidth(`${Math.round(divSizes.width)}px`);
    console.log(stickerHeight);
  }, [divSizes]);

  const stickers = [
    <Image
      src={Grump}
      alt="a grumpy monkey holding coffee"
      style={{ objectFit: "cover" }}
    />,
    <Image
      src={Panda}
      alt="A red panda dressed as a train conductor holds his hands up"
      style={{ objectFit: "cover" }}
    />,
    <Image
      src={Dwight}
      alt="Dwight from The Office wears a mannequin face on his face"
      style={{ objectFit: "cover" }}
    />,
    <Image
      src={Sabrina}
      alt="Sabrina Carpenter opening a towel to reveal her outfit"
      style={{ objectFit: "cover" }}
    />,
  ];

  // this function should check the size of the parent div, then if the parent is shorter than this div + new Image, stop looping
  function setupSide() {
    let parentDive;
    let thisDiv;

    // map through the image list

    let clipBox;

    if (side == "left") {
      clipBox = `rect(0px, 200px, ${stickerHeight}, 0px)`;
    } else if (side == "right") {
      clipBox = `rect(0px, ${stickerWidth}, ${stickerHeight}, 0)`;
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexFlow: "column nowrap",
        zIndex: "2000",
        width: "inherit",
        height: stickerHeight,
        gap: "150px",
        // border: "2px solid red",
        overflow: "visible",
        clipBox: `rect(0px, 0px, 0px, 0px)`,
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: `${side == "left" ? "200px" : "0px"}`,
      }}
    >
      {stickers.map((s, i) => {
        return <div key={i}>{s}</div>;
      })}
    </div>
  );
}
