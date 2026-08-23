import React from "react";
import Mouth1 from "../app/images/mouth1.png";
import Mouth2 from "../app/images/mouth2.png";
import Mouth3 from "../app/images/mouth3.png";
import ReviewSingle from "./ReviewSingle";
import "./styles/review.css";
import ListOfReviews from "../reviews.json";
import SingleSticker from "./SingleSticker";
import StarMouth from "../app/images/starMouth.png";
import HappyStar from "../app/images/star-happy.png";
import SurprisedStar from "../app/images/star-surprise.png";
import Image from "next/image";
import reviewCSS from "./styles/review.css";
import GlobalHref from "./GlobalHref";
const mouths = [Mouth1, Mouth2, Mouth3];

export default function Reviews() {
  return (
    <div className="reviewListContainer">
      <div className="amazed-star">
        <Image src={SurprisedStar} alt="An amazed star" fill={true} />
      </div>
      <div className="happy-star">
        <Image src={HappyStar} alt="A happy star" fill={true} />
      </div>
      <div className="headerDiv">
        <h1
          style={{
            textAlign: "center",
            paddingTop: ".5em",
            zIndex: "500",
            color: "var(--white)",
          }}
        >
          100+ <span style={{ whiteSpace: "preserve nowrap" }}>5-star</span>
          <br />
          Google Reviews!
        </h1>
      </div>

      {ListOfReviews.map((r, i) => {
        console.log(i);
        return (
          <ReviewSingle
            key={i}
            author={r.author}
            review={r.review}
            pic={mouths[i]}
          />
        );
      })}
      {/* <SingleSticker side="right" stickerNumber={1} /> */}
      <GlobalHref
        text="Check out more Guest Reviews!"
        url="https://share.google/k6aR8dhjfsXRhJFhf"
      />
    </div>
  );
}
