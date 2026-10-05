import React from "react";
import "../app/globals.css";
import MarkerTip from "@/app/images/MarkerTip";

export default function GlobalHref({ text, url }) {
  return (
    <a className="new-link" href={url}>
      <div className="marker-barrel">{text}</div>
      {/* <div className="marker-tip">
        <MarkerTip />
      </div> */}
    </a>
  );
}
