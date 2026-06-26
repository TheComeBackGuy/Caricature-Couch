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
        />{" "}
      </div>
      <div className="contentContainer">
        <h1
          style={{
            color: "var(--rainbowRed)",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Welcome to Chattanooga's Newest Destination for fun!
        </h1>
      </div>
      {/* <BestoftheBest /> */}
      <Reviews />
      {/* <SingleSticker side="left" stickerNumber={0} /> */}
      <div className="promoContainer">
        {/* <CopiesPromo /> */}
        {/* <ImagePromo
          theme="red"
          img="/images/copies2.jpg"
          alt="A printer atatcks an artist with copies"
          hdr="Okay, We're being dramatic"
          p="We just love that we can now give you high-quality copies of your
          caricatures."
        /> */}
        {/* <ImagePromo
          theme="yellow"
          img="/images/caricatureStickerPromo.png"
          alt="A sample of sticker sheets"
          hdr="Stickers of you"
          p="Our coolest add-on is your very own sticker sheet! Get a Choo Choo sticker, Caricature  Couch sticker, and two stickers of your caricature."
        />{" "} */}
        {/* <ImagePromo
          theme="white"
          alt="A picture of the back entrance to the Chattanooga Choo Choo"
          img="/images/chooch.jpg"
          hdr="The Choo Choo"
          p="We are located in the wonderfully historic Chattanooga Choo Choo. Come find us inside the beautiful main atrium."
        /> */}
      </div>
    </>
  );
}
