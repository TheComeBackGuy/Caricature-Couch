import React from "react";
// import "../app/globals.css";
import "./styles/polaroid.css";
import Image from "next/image";
// import Pol1 from "../app/images/polaroids/pol-1.jpg";
// import Pol2 from "../images/polaroids/pol-2.jpg";
import Pin from "../app/images/pin.gif";

export default function Polaroid({ rotate, image, imageAlt, text }) {
  function location() {
    return (
      <>
        <Image
          src={Pin}
          alt="a map pin"
          loading="lazy"
          width="29"
          height="41"
          style={{ margin: "10px" }}
          srcset="
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin.92ddf70d.gif&w=32&q=75 1x,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin.92ddf70d.gif&w=64&q=75 2x
	"
          // placeholder="blur"
        />
        <p>
          1400 Market Street
          <br /> Chattanooga, TN 37405
        </p>
      </>
    );
  }

  return (
    <div className="polaroid" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="polaroidPicture">
        {/* <img src={`/polaroids/pol-${image}.jpg`} alt={imageAlt} /> */}
        <Image
          src={`/polaroids/pol-${image}.jpg`}
          alt={imageAlt}
          fill
          sizes="(min-width: 1580px) 452px, (min-width: 1020px) calc(35.56vw - 103px), (min-width: 920px) calc(60vw - 212px), (min-width: 720px) calc(60vw - 140px), (min-width: 580px) calc(60vw - 110px), (min-width: 420px) calc(120vw - 200px), 280px"
          srcSet="
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=640&q=75 640w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=750&q=75 750w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=828&q=75 828w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=1080&q=75 1080w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=1200&q=75 1200w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=1920&q=75 1920w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=2048&q=75 2048w,
		/_next/image?url=%2Fpolaroids%2Fpol-guest2.jpg&w=3840&q=75 3840w
	"
        />
      </div>
      <div className="polaroidText">{text ? text : location()}</div>
    </div>
  );
}
