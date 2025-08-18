import React from "react";
import "../globals.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";
import CopiesPromo from "@/components/CopiesPromo";
import ImagePromo from "@/components/ImagePromo";

export default function Products() {
  return (
    <>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="guest4"
          imageAlt={"A guest holding her caricature up"}
          text="Our guests are always walking away smiling."
        />
        <Polaroid
          rotate={0}
          z={2}
          image="guest5"
          imageAlt={"A couple happily displaying their drawing"}
          text="We love drawing couples!"
        />
        <Polaroid
          rotate={5}
          z={2}
          image="guest6"
          imageAlt={"A couple happily displaying their drawing"}
          text="We're all about drawing people together."
        />
      </div>
      <div style={{ margin: "40px 20px" }}>
        <h1 className="pageHeader">We can offer more than ever!</h1>
        <p style={{ padding: "0 30px " }}>
          Small as it is, our new store isn't just a place to get a caricature
          done. It's a hub for all of our art. A much as we love caricatures,
          and we do, we doodle a lot. Now it's time to share those doodles and
          ideas with you.
        </p>
      </div>
      <div className="promoContainer">
        {/* <CopiesPromo /> */}
        <ImagePromo
          theme="red"
          img="/images/copies2.jpg"
          alt="A printer atatcks an artist with copies"
          hdr="Caricature Copies"
          p="Okay, we're being dramatic. We just love that we can now give you high-quality copies of your caricatures."
          inline
        />
        <ImagePromo
          theme="white"
          img="/images/caricatureStickerPromo.png"
          alt="A sample of sticker sheets"
          hdr="Stickers of you"
          p="Our coolest add-on is your very own sticker sheet! Get a Choo Choo sticker, Caricature  Couch sticker, and two stickers of your caricature."
          inline
        />
        <ImagePromo
          theme="white"
          img="/images/stickerPromo.png"
          alt="Stickers on a composition book"
          hdr="Exclusive Stickers"
          p="From pop-culture, to animals, to the Choo Choo; get stickers exclusive to visiting HartsyFartsy's Caricature Couch."
        />
        <ImagePromo
          theme="white"
          img="/images/comicsPromo.png"
          alt="Two comic books side by side"
          hdr="Comics"
          p="We've made some comics in our time and now it's the only place you can get these unique stories"
        />
        <ImagePromo
          theme="white"
          img="/images/printsPromo.png"
          alt="3 posters hanging above a bed's headboard"
          hdr="Prints"
          p="There's so much we love and so many drawings we want to draw. Check out some of our art prints available only in store."
        />
        <ImagePromo
          theme="white"
          img="/images/originalsPromo.png"
          alt="3 original caricature samples"
          hdr="Originals"
          p="We're selling off old samples and new pieces. They just need a good home to appreciate them."
        />
      </div>
    </>
  );
}
