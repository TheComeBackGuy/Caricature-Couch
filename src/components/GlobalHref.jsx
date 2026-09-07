import React from "react";
import "../app/globals.css";

export default function GlobalHref({ text, url }) {
  return (
    <a className="new-link" href={url}>
      <div>{text}</div>
    </a>
  );
}
