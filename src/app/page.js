import Image from "next/image";
import styles from "./page.module.css";
import Rainbow from "@/components/Rainbow";
import Booth from "../app/images/booth.png";
import Printer from "../app/images/icon-printer.png";
import FooterCouch from "@/components/FooterCouch";
import PromoSmall from "@/components/PromoSmall";

import "../app/globals.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Rainbow side="left" />
      <div className="contentArea">
        <Header />
        <section className={styles.promoSmallSection}>
          <PromoSmall
            img={Booth}
            hdr={"Our New Location"}
            text="You no longer have to endure the chilling cold or the oppresive heat to
            get a great caricature. We are located in the red space inside the
            atrium of the historic Chattanooga Choo Choo."
          />
          <PromoSmall
            img={Printer}
            hdr="Sit & Stay or Pick it up later"
            text="Yeah, that’s right. You can totally sit down with us and have some fun, but we know you’ve got  so much you want toi do and see. So, we can now take pictures of you and we’ll work on it while you see the sites!"
          />
        </section>
      </div>
      <Rainbow side="right" />
    </div>
  );
}
