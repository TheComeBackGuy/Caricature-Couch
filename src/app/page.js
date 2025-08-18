import styles from "./page.module.css";
import PromoSmall from "@/components/PromoSmall";
import Polaroid from "@/components/Polaroid";
import "../app/globals.css";
import Stars from "@/components/Stars";
import CopiesPromo from "@/components/CopiesPromo";
import ImagePromo from "@/components/ImagePromo";
import Hours from "@/components/Hours";

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
          z={2}
          image="wall"
          imageAlt={"the back wall"}
          text="The wall is looking pretty great."
        />
        <Polaroid
          rotate={5}
          z={2}
          image="guest3"
          imageAlt={"Our booth in the lobby"}
          text="Knights and princesses? We can do that!"
        />{" "}
      </div>
      {/* <Hours /> */}
      <Stars />
      <div className="promoContainer">
        <ImagePromo
          theme="red"
          img="/images/copies2.jpg"
          alt="A printer atatcks an artist with copies"
          hdr="Okay, We're being dramatic"
          p="We just love that we can now give you high-quality copies of your
          caricatures."
        />
        <ImagePromo
          theme="yellow"
          img="/images/caricatureStickerPromo.png"
          alt="A sample of sticker sheets"
          hdr="Stickers of you"
          p="Our coolest add-on is your very own sticker sheet! Get a Choo Choo sticker, Caricature  Couch sticker, and two stickers of your caricature."
        />{" "}
        <ImagePromo
          theme="white"
          alt="A picture of the back entrance to the Chattanooga Choo Choo"
          img="/images/chooch.jpg"
          hdr="The Choo Choo"
          p="We are located in the wonderfully historic Chattanooga Choo Choo. Come find us inside the beautiful main atrium."
          inline
        />
      </div>
      {/* <section className={styles.promoSmallSection}>
        <PromoSmall
          img={"/images/booth.png"}
          hdr={"Our New Location"}
          text="You no longer have to endure the chilling cold or the oppresive heat to
            get a great caricature. We are located in the red space inside the
            atrium of the historic Chattanooga Choo Choo."
        />
        <PromoSmall
          img={"/images/illustration-printer.gif"}
          hdr="We make Copies"
          text="With our amazing new printer, we can now make copies of your drawing. So, whether it's so you can send it to that picture-hungry relative or because you and your travelling companion are going in different directions.  "
        />
      </section> */}
    </>
  );
}
