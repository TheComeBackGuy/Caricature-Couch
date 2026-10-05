import React from "react";
import Image from "next/image";
import NoaiSticker from "../app/images/noai.png";
import "./styles/no-ai.css";
import GlobalHref from "./GlobalHref";

export default function NoAI() {
  return (
    <div className="ai-container">
      <div className="noai-image-container">
        <Image
          src={NoaiSticker}
          alt="stylized no ai sticker"
          width={500}
          height={459}
          className="the-image"
        />
      </div>
      <div className="text-area">
        <h1>
          We{" "}
          <span style={{ color: "white", whiteSpace: "nowrap" }}>do not</span>{" "}
          use AI for anything.
        </h1>
        <h2>and we won't.</h2>
        <cite style={{ color: "var(--rainbowRed)" }}>
          We do not use any kind of machine-learning or "ai" prompting to
          produce our art.{" "}
        </cite>
        {/* <p>
          While we use digital programs like Clip Studio Paint to produce a lot
          of our prints and stickers, these are drawing programs. All our
          digital art is drawn on a tablet using a stylus and our hand in the
          same way we draw on paper. Many of our prints start as sketches on
          paper. We use digital programs to give us the bold lines and color
          that we love.
        </p> */}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <GlobalHref url="./AboutUs" text="Learn More" />
      </div>
    </div>
  );
}
