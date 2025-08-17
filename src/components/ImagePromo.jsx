import React from "react";
import Image from "next/image";
import "./styles/imagePromo.css";

export default function ImagePromo({ img, alt, hdr, p, theme, inline }) {
  //   console.log(text);
  let hdrColor;
  let pColor;
  let bgColor;
  let styles;
  let imageStyles;

  switch (theme) {
    case !theme:
      bgColor = "var(--rainbowRed)";
      hdrColor = "var(--white)";
      pColor = "var(--rainbowYellow)";
      break;
    case "red":
      bgColor = "var(--rainbowRed)";
      hdrColor = "var(--white)";
      pColor = "var(--rainbowYellow)";
      break;
    case "yellow":
      bgColor = "var(--rainbowYellow)";
      hdrColor = "var(--rainbowBlue)";
      pColor = "var(--rainbowRed)";
      break;
    case "blue":
      bgColor = "var(--rainbowBlue)";
      hdrColor = "var(--rainbowOrange)";
      pColor = "var(--rainbowYellow)";
      break;
    case "turquoise":
      bgColor = "var(--rainbowTurquoise)";
      hdrColor = "var(--rainbowYellow)";
      pColor = "var(--white)";
      break;
    case "orange":
      bgColor = "var(--rainbowOrange)";
      hdrColor = "var(--white)";
      pColor = "var(--rainbowBlue)";
      break;
    case "white":
      bgColor = "var(--white)";
      hdrColor = "var(--rainbowOrange)";
      pColor = "var(--rainbowTurquoise)";
      break;
    case "default":
      bgColor = "transparent";
      hdrColor = "var(--rainbowTurquoise)";
      pColor = "var(--tanDark)";
    default:
      break;
  }

  if (inline) {
    styles = {
      backgroundColor: bgColor,
      borderColor: hdrColor,
      flexFlow: "row nowrap",
      minWidth: "100%",
    };
    theme = "white";
    imageStyles = {
      minWidth: "50%",
      height: "100%",
    };
  } else {
    styles = {
      backgroundColor: bgColor,
    };
    imageStyles = {};
  }
  return (
    <div className="container" style={styles}>
      <div className="promoImage" style={imageStyles}>
        <Image src={img} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="textArea">
        <h2 style={{ color: hdrColor }}>{hdr}</h2>
        <p style={{ color: pColor }}> {p}</p>
      </div>
    </div>
  );
}
