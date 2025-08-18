import React from "react";
import "../globals.css";
import Polaroid from "@/components/Polaroid";

export default function AboutUs() {
  return (
    <>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="meMandy"
          imageAlt={
            "Two poeple smiling in front of the Chattanooga Choo Choo building"
          }
          text="Me and Mandy the day before announcing the opening of the store"
        />
        <Polaroid
          rotate={0}
          z={2}
          image="dinner"
          imageAlt={"Three smiling people having dinner"}
          text="Sometimes, the best times were after a busy show"
        />
        <Polaroid
          rotate={5}
          z={2}
          image="krystalMe"
          imageAlt={"Two people making silly faces"}
          text="Just a couple of goobs. "
        />{" "}
      </div>
      <div className="contentContainer" style={{ marginTop: "40px" }}>
        <h1>
          Spreading Smiles and Joy With Silly Pictures and Immature Doodles
        </h1>
        <p>
          We're the quiet artist behind you in class doodling pictures of the
          teacher. We're the kid in Phys Ed class sitting on the ground drawing
          monsters in the sand. We're the adult that never let life remove us
          from the act of creation.
        </p>
        <p>
          Now we live here in the first National Park City! Our adopted home of
          Chattanooga, The Scenic City, has embraced us so warmly. We want to
          make the best of that and bring more fun art and atmosphere to this
          wonderful town. That's why we opened Hartsyfartsy's Caricature Couch.
          We want to be a big part of this beautiful city and we want to spread
          as much art and as many laughs as we can. I don't know about you, but
          we could really use it.
        </p>

        <div style={{ marginTop: "40px" }}>
          <h2>We do not use AI</h2>
          <cite style={{ color: "var(--rainbowRed)" }}>
            We do not use any kind of machine-learning or "ai" prompting to
            produce our art.{" "}
          </cite>
          <p>
            While we use digital programs like Clip Studio Paint to produce a
            lot of our prints and stickers, these are drawing programs. All our
            digital art is drawn on a tablet using a stylus and our hand in the
            same way we draw on paper. Many of our prints start as sketches on
            paper. We use digital programs to give us the bold lines and color
            that we love.
          </p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <h2>We welcome all those who welcome all</h2>
          <p>
            Our enviroment is one of inclusion and welcomeness. If you are
            entering our space, know that our goal is to make all those here
            feel welcomed and comfortable. We expect you to honor that as well.
          </p>
        </div>
      </div>
    </>
  );
}
