"use client";

import "../app/globals.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Grump from "../../public/images/sticker-grump.png";
import Panda from "../../public/images/red-panda.png";
import Dwight from "../../public/images/dwight.png";
import Sabrina from "../../public/images/sabrina.png";

export default function StickerColumn({ divSizes }) {
  const [stickerHeight, setStickerHeight] = useState("0px");
  useEffect(() => {
    // console.log(height.height);
    setStickerHeight(`${Math.round(divSizes.height)}px`);

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

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexFlow: "column nowrap",
        zIndex: "0",

        gap: "50px",
        height: stickerHeight,
        border: "2px solid red",
        overflow: "hidden",
      }}
    >
      {stickers.map((s, i) => {
        return <div key={i}>{s}</div>;
      })}
    </div>
  );
}
