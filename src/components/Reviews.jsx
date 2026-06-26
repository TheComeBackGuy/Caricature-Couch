import React from "react";
import Mouth1 from "../app/images/mouth1.png";
import Mouth2 from "../app/images/mouth2.png";
import Mouth3 from "../app/images/mouth3.png";
import ReviewSingle from "./ReviewSingle";
import "./styles/review.css";
import ListOfReviews from "../reviews.json";
import SingleSticker from "./SingleSticker";

const mouths = [Mouth1, Mouth2, Mouth3];

export default function Reviews() {
  return (
    <div className="reviewListContainer">
      {/* <h1
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          paddingTop: "1.5em",
        }}
      >
        100+ 5-star
        <br />
        Google Reviews!
      </h1> */}
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
    </div>
  );
}
