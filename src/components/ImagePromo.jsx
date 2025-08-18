import React from "react";
import Image from "next/image";
import "./styles/imagePromo.css";

export default function ImagePromo({ img, alt, hdr, p, theme, inline }) {
  //   console.log(text);
  let hdrColor;
  let pColor;
  let bgColor;

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

  function flipCard() {
    if (inline) {
      return "inline-flip";
    } else {
      return "column";
    }
  }

  return (
    <div
      className={`container ${flipCard()}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="promoImage">
        <Image
          src={img}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 1440px) 500px, (min-width: 920px) calc(45.8vw - 150px), (min-width: 720px) calc(49.44vw - 125px), (min-width: 420px) calc(50vw - 105px), 95px"
          srcSet="
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=640&q=75 640w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=750&q=75 750w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=828&q=75 828w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=1080&q=75 1080w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=1200&q=75 1200w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=1920&q=75 1920w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=2048&q=75 2048w,
		/_next/image?url=%2Fimages%2Fcopies2.jpg&w=3840&q=75 3840w
	"
        />
      </div>
      <div className="textArea">
        <h2 style={{ color: hdrColor }}>{hdr}</h2>
        <p style={{ color: pColor }}> {p}</p>
      </div>
    </div>
  );
}
