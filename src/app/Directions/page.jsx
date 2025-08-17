import React from "react";
import "../globals.css";
import "../../components/styles/directions.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";
import ImagePromo from "@/components/ImagePromo";
export default function Directions() {
  return (
    <div>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="choochInside"
          imageAlt={"A parking lot"}
          text="That's us in the corner!"
        />
        <Polaroid
          rotate={5}
          z={2}
          image="choochOutside"
          imageAlt={"The side of the Parking garage seen from the Choo Choo"}
          text="Look at that outside facade! It's gorgeous. "
        />
      </div>
      <div className="contentContainer" style={{ margin: "80px 0" }}>
        <h1 className="pageHeader">The Scenic City</h1>
        <p>
          We have loads of amazingly scenic veiws in the first National Park
          City. One of those is the Chattanooga Choo Choo. We are located in the
          heart of Chattanooga in the historic Chattanooga Choo Choo. There are
          many great businesses and eateries around us. You can find our red
          booth in the atrium of the Choo Choo.{" "}
        </p>
      </div>
      <div className="promoContainer">
        {/* <h1 className="pageHeader">Parking</h1> */}
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
        <ImagePromo
          theme="white"
          img="/polaroids/pol-booth.jpg"
          alt="A red booth with sliding barn doors"
          hdr="Our Booth"
          p="Our shop is the red booth in the corner of the atrium. Come on in! "
          inline
        />
      </div>
      <div></div>
    </div>
  );
}
