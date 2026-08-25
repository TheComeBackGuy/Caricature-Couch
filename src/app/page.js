import styles from "./page.module.css";
import PromoSmall from "@/components/PromoSmall";
import SingleSticker from "@/components/SingleSticker";
import Polaroid from "@/components/Polaroid";
import "../app/globals.css";
import Stars from "@/components/Stars";
import CopiesPromo from "@/components/CopiesPromo";
import ImagePromo from "@/components/ImagePromo";
import Hours from "@/components/Hours";
import MenuList from "@/components/MenuList";
import Reviews from "@/components/Reviews";
import BestoftheBest from "@/components/BestoftheBest";
import "../components/styles/directions.css";
import Parking from "@/components/Parking";
import WeWantYou from "@/components/WeWantYou";

export default function Home() {
  return (
    <>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="guest2"
          imageAlt={
            "Two poeple smiling in front of the Chattanooga Choo Choo building"
          }
          text="Honestly, our guests are the best people!"
        />
        <Polaroid
          rotate={0}
          z={10}
          image="wall"
          imageAlt={"the back wall"}
          text="We can draw cute AND crazy!"
        />
        <Polaroid
          rotate={5}
          z={0}
          image="guest3"
          imageAlt={"Our booth in the lobby"}
          text="We adore drawing couples!"
        />
        <Polaroid
          rotate={5}
          z={0}
          image="guest10"
          imageAlt={"Our booth in the lobby"}
          text=" "
        />{" "}
      </div>
      <div className="contentContainer">
        {/* <h1
          style={{
            color: "var(--rainbowRed)",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Welcome to Chattanooga's Newest Destination for fun!
        </h1> */}
      </div>

      <div className="addy">
        <div className="deets">
          <h2 style={{ color: "white" }}>Operating Hours</h2>
          <p>
            10am - 8pm <br />7 DAYS A WEEK!
          </p>
        </div>
        <div className="deets">
          <h2 style={{ color: "white" }}>Address</h2>
          <p>
            1400 Market Street #126
            <br />
            Chatttanooga, TN 37405
          </p>
        </div>
      </div>
      {/* <SingleSticker side="left" stickerNumber={0} /> */}
      <div
        className="contentContainer"
        style={{ margin: "40px 0", width: "100%" }}
      >
        {/* <h1 className="pageHeader">When's and Where's</h1> */}
      </div>
      <div className="promoContainer">
        <Parking />
        <Reviews />
        <WeWantYou />
      </div>
    </>
  );
}
