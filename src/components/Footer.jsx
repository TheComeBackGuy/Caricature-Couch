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
          This site has been lovingly crafted by Dennis Hart. Please look but
          don't touch.
        </div>
        <div>
          <p>
            Open 10am-8pm
            <br />
            CLOSED TUESDAYS
          </p>
          <p>Be Kind. Fight Evil.</p>
        </div>
      </div>
    </footer>
  );
}
