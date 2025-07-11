import Image from "next/image";
import styles from "./page.module.css";
import Rainbow from "@/components/Rainbow";
import Logo from "./images/cc-logo.png";
import TrainImage from './images/train.png';
import CouchImage from './images/couch.png';
import "../app/globals.css";


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.headerContainer}>
        <Image
          src={Logo}
          alt="Caricature Coouch Logo"
          width={515}
          height={200}
          style={{ zIndex: "100" }}
        />
      </section>
        <div style={{zIndex:'300', marginBottom: '-80px'}}>
          <Image src={TrainImage} alt="A Cartoon Train" />
          </div> 
<div className={styles.card} style={{zIndex:"299"}}>
  <h1>Our New Location</h1>
        <p>
          You no longer have to endure the chilling cold or the oppresive heat
          to get a great caricature. We are located in the red space inside the
          atrium of the historic Chattanooga Choo Choo.
          <cite className="address"> 1400 Market St #126, Chattanooga, TN 37402</cite>
        </p>
</div>

      <div style={{zIndex:'300', marginBottom: '-90px', transform:'rotate(-9deg)'}}>
          <Image src={CouchImage} alt="A Cartoon Couch" />
          </div> 
<div className={styles.card} style={{display: 'flex', borderColor: "var(--rainbowTurquoise)",zIndex:"299", justifyContent:"right"}}>
  <h1>The Couch</h1>
        <p>
          Come sit in our comfy little couch, goof off with us, and get drawn OR we’ll take your picture and draw it in bewteen our live guests throghout the day.
        </p>
</div>
      {/* <Train /> */}
      <Rainbow />
      <footer className="footer"></footer>
    </div>
  );
}
