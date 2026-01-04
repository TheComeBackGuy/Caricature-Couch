import React from "react";
import "./styles/announcement-style.css";
// import "../app/globals.css";
export default function Announcement() {
  return (
    <>
      <div className="announcement-container">
        We are currently on break. Our store is temporarily closed. We will
        return on Jan 31st!
      </div>{" "}
      <div className="announcement-container" style={{ position: "fixed" }}>
        We are currently on break. Our store is temporarily closed. We will
        return on Jan 31st!
      </div>
    </>
  );
}
