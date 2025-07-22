import React from "react";
import "./styles/footer.css";
import Pin from "../app/images/pin.gif";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInfo">
        <div>
          <Image src={Pin} alt="a map pin" />
          <p>
            1400 Market St. #126
            <br />
            Chattanooga, TN 37402
          </p>
        </div>
        <div>
          This site has been lovingly crafted by the person who you will likely
          get drawn by
        </div>
        <div>Be Kind. Fight Evil.</div>
      </div>
    </footer>
  );
}
