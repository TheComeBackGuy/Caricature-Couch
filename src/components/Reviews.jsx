import React from "react";
import ReviewSingle from "./ReviewSingle";
import "./styles/review.css";
import ListOfReviews from "../reviews.json";
export default function Reviews() {
  return (
    <div className="reviewListContainer">
      {ListOfReviews.map((r, i) => {
        console.log(i);
        return (
          <div key={i}>
            <ReviewSingle author={r.author} review={r.review} pic={i} />
          </div>
        );
      })}
    </div>
  );
}
