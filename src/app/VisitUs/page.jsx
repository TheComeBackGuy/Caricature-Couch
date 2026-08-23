import React from "react";
import "../globals.css";
import "../../components/styles/directions.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";
import ImagePromo from "@/components/ImagePromo";
export default function Directions() {
  return (
    <>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="booth2"
          imageAlt={"Our cozy little booth"}
          text="That's us in the corner!"
        />
        <Polaroid
          rotate={0}
          z={2}
          image="chatSign"
          imageAlt={"A light up sign spelling Chattanooga"}
          text="Feeling lucky to live here every day. "
        />{" "}
        <Polaroid
          rotate={5}
          z={2}
          image="choochOutside"
          imageAlt={"The side of the Parking garage seen from the Choo Choo"}
          text="Look at that outside facade! It's gorgeous. "
        />
        <Polaroid
          rotate={5}
          z={2}
          image="choochOutside"
          imageAlt={"The side of the Parking garage seen from the Choo Choo"}
          text="Look at that outside facade! It's gorgeous. "
        />
      </div>
      <div
        className="contentContainer"
        style={{ margin: "40px 0", width: "100%" }}
      >
        {/* <h1 className="pageHeader">When's and Where's</h1> */}
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
      </div>
      <div className="promoContainer">
        <h1 className="pageHeader">Parking</h1>
        <ImagePromo
          theme="white"
          img="/polaroids/pol-parkingLot.jpg"
          alt="A parking lot filled with cars"
          hdr="Parking Lot"
          p="There is paid parking in the front loop and in the back of the Choo Choo. Be sure to pay at the booth. It's a steep ticket. "
        />
        <ImagePromo
          theme="white"
          img="/polaroids/pol-parkingGarage.jpg"
          alt="A4 story parking garage"
          hdr="Parking Garage"
          p="The parking garage next door is also a great place to park, especially in the heat of summer. "
        />
      </div>
      <div></div>
    </>
  );
}
