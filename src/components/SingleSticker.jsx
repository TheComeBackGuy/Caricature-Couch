import React from "react";
import Image from "next/image";
import Grump from "../../public/images/sticker-grump.png";
import Panda from "../../public/images/red-panda.png";
import Dwight from "../../public/images/dwight.png";
import Sabrina from "../../public/images/sabrina.png";

export default function SingleSticker({ side, stickerNumber }) {
  function randoPosition(n) {
    return Math.floor(Math.random() * n);
  }

  function whichSide(s) {
    let marginStyle;
    if (s == "left") {
      marginStyle = {
        position: "relative",
        // top: `${randoPosition(60)}%`,

        left: "-175px",
        zIndex: "3000",
        overflow: "visible",
      };
    } else if (s == "right") {
      marginStyle = {
        position: "relative",
        right: "-0px",
        // top: `${randoPosition(60)}%`,
        zIndex: "3000",
        overflow: "visible",
      };
    }
    return marginStyle;
  }

  const stickers = [
    <Image
      src={Grump}
      alt="a grumpy monkey holding coffee"
      style={{ objectFit: "cover" }}
      loading="lazy"
    />,
    <Image
      src={Panda}
      alt="A red panda dressed as a train conductor holds his hands up"
      style={{ objectFit: "cover" }}
      loading="lazy"
    />,
    <Image
      src={Dwight}
      alt="Dwight from The Office wears a mannequin face on his face"
      style={{ objectFit: "cover" }}
      loading="lazy"
    />,
    <Image
      src={Sabrina}
      alt="Sabrina Carpenter opening a towel to reveal her outfit"
      style={{ objectFit: "cover" }}
      loading="lazy"
    />,
  ];
  return <div style={whichSide(side)}>{stickers[stickerNumber]}</div>;
}
