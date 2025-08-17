import React from "react";
import Image from "next/image";
import Grump from "../../public/images/sticker-grump.png";
import Panda from "../../public/images/red-panda.png";
import Dwight from "../../public/images/dwight.png";
import Sabrina from "../../public/images/sabrina.png";
export default function StickerColumn() {
  return (
    <div
      id="sticker-div"
      style={{
        position: "absolute",
        display: "flex",
        zIndex: "500",
        top: "15%",
        width: "inherit",
        height: "inherit",
        border: "2px solid red",
        padding: "10px",
        // margin: "-15px -20px 0 -20px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          flexFlow: "column wrap",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Image
          src={Grump}
          alt="a grumpy monkey holding coffee"
          style={{ objectFit: "cover" }}
        />{" "}
        <Image
          src={Panda}
          alt="a grumpy monkey holding coffee"
          style={{ objectFit: "cover" }}
        />{" "}
        <Image
          src={Dwight}
          alt="a grumpy monkey holding coffee"
          style={{ objectFit: "cover" }}
        />
        <Image
          src={Sabrina}
          alt="a grumpy monkey holding coffee"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
