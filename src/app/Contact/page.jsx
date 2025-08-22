"use client";

import React, { useState } from "react";
import "../globals.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [warning, setWarning] = useState("none");
  const [thankYouVisible, setThankYouVisible] = useState(false);
  function handleSubmit(e) {
    if (name.length == 0 || email.length == 0 || details.length == 0) {
      setWarning("block");
      e.preventDefault();
      console.log("you failed");
    } else {
      setWarning("none");
    }

    console.log("submit");
  }

  const formResult = {
    name,
    email,
    details,
  };

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formResult);
    setErrorMessage("");
    fetch("/__contact.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formResult,
      }),
    })
      .then(() => {
        handleSuccess();

        // navigate("/thank-you/");
      })
      .catch((error) => alert(error));
  }

  function handleSuccess() {
    console.log("Success!!");

    setSubmitted(true);
    setThankYouVisible(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setDetails("");
      setWarning("");
      //       <!-- Event snippet for Submit Contact Form conversion page
      // In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
      // <script>
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof url != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          send_to: "AW-1008987808/gIjQCMm3gtwDEKDdj-ED",
          event_callback: callback,
        });
        return false;
      }
      gtag_report_conversion();
      // </script>
    }, 4000);
  }

  return (
    <>
      <div className="polaroidContainer">
        <Polaroid
          rotate={-5}
          z={1}
          image="dennis"
          imageAlt={"Dennis sitting at his easel drawing caricartures"}
          text="Catching Dennis off-guard at a wedding."
        />{" "}
        <Polaroid
          rotate={0}
          z={0}
          image="couple"
          imageAlt={"A picture of two people making funny faces"}
          text="We are just a couple of goofballs with bills."
        />
        <Polaroid
          rotate={5}
          z={2}
          image="team"
          imageAlt={"A picture of the Chattanooga Choo Choo"}
          text="SantaCaligon 2019. What a year!"
        />
      </div>
      <div className="contentContainer" style={{ marginTop: "40px" }}>
        <h1 className="pageHeader">Reaching out is as Easy as an email</h1>
        <p>
          Please give us as many details as you can regaurding your question or
          comment.
        </p>
        <p>
          We generally respond within 24 hours with the exception of Saturday
          and Sunday. If you are reaching out on the weekends, please allow us
          to follow up with you on Monday.{" "}
        </p>
        <p>
          If you would like to setup an appointment please reach out here as
          well.
        </p>

        <h2>Alert</h2>
        <p>
          It has come to my attention that the form is not working yet. Please
          email dennis@hartsyfartsy.com with your questions in the meantime
        </p>

        <form
          name="Couch Contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
            }}
          >
            <p type="hidden">
              <label>
                Don’t fill this out if you’re human:{" "}
                <input name="bot-field" type="text" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </label>{" "}
            <label>
              Email
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </label>{" "}
          </div>
          <div className="commentBox">
            <label>
              Details
              <textarea
                name="details"
                type="textbox"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              ></textarea>
              <cite className="error" style={{ display: warning }}>
                Looks like you've got some missing info there.{" "}
              </cite>
            </label>{" "}
            <button className="submit" submit="true">
              Submit
            </button>
          </div>
        </form>
        {<div style={{ display: thankYouVisible ? "flex" : "none" }}></div>}
      </div>
    </>
  );
}
