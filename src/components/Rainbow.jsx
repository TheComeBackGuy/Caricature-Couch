import React from "react";
import "../app/globals.css";
import "../app/page.module.css"



export default function Rainbow() {
  return (
    <div className="rainbowContainer" >
      <div className="rainbowStripe" style={{ backgroundColor: "var(--rainbowBlue)" }} />
      <div className="rainbowStripe" style={{ backgroundColor: "var(--rainbowTurquoise)" }} />
      <div className="rainbowStripe" style={{ backgroundColor: "var(--rainbowYellow)" }} />
      <div className="rainbowStripe" style={{ backgroundColor: "var(--rainbowOrange)" }} />
      <div className="rainbowStripe" style={{ backgroundColor: "var(--rainbowRed)" }} />
    </div>
  );
}
