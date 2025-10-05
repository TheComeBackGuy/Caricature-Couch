"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import "../../components/styles/appearances.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [warning, setWarning] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [dates, setDates] = useState([]);
  const [numberOfFaces, setNumberOfFaces] = useState(1);
  const [colorStyle, setColorStyle] = useState("One-Color Shaded");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentStartTime, setAppointmentStartTime] = useState("");
  const [formDisplay, setFormDisplay] = useState("flex");
  const [thankYouDisplay, setThankYouDisplay] = useState("none");

  // days

  const appointmentTimes = [
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
  ];

  function listAppointmentTimes() {}

  useEffect(() => {}, []);

  const formResult = {
    name,
    email,
    numberOfFaces,
    colorStyle,
    appointmentDate,
    appointmentStartTime,
    details,
  };

  useEffect(() => {
    if (
      name.length == 0 ||
      email.length == 0 ||
      appointmentDate == "" ||
      appointmentStartTime == ""
    ) {
      setIsDisabled(true);
      // console.log("still nothing");
    } else {
      setIsDisabled(false);
      setWarning("none");
    }
  }, [name.length, email.length, appointmentDate, appointmentStartTime]);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formResult);
    setErrorMessage("");
    fetch("/__appointments.html", {
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

    // setSubmitted(true);
    setFormDisplay("none");
    setThankYouDisplay("flex");
    setTimeout(() => {
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
        <h1 className="pageHeader">Make us part of your plan</h1>
        <p>
          We are always open for walk up customers, but we also accept
          appointments.
        </p>

        {/* <h2>Alert</h2>
        <p>
          It has come to my attention that the form is not working yet. Please
          email dennis@hartsyfartsy.com with your questions in the meantime
        </p> */}
        <h2>Fill out the form</h2>
        <p>
          Fill out the form below and choose a date and time that work best for
          you. We will reach back out to confirm (usually within 24 hours).
        </p>
        <h2>Pay your deposit</h2>
        <p>
          After we have confirmed a date and time for your visit, we will send
          you an invoice with a non-refundable deposit. Paying that will secure
          your time and date. This is to protect your artist's energy and time.
        </p>
        <h2>Rescheduling</h2>
        <p>
          If you need to reschedule for any reason, please email us. We will
          work with you on a new appointment. It is important to know your
          initial desposit will be lost and we will ask for an additional
          deposit for your new appointment.
        </p>
        <h2> Cancelling</h2>
        <p>
          If you need to cancel for any reason, please email us. Your deposit
          will be lost.
        </p>

        <div className="intakeForm" style={{ display: thankYouDisplay }}>
          <h1>Thanks, {name}!</h1>
          <>
            <p>
              We're super excited to meet and draw you! We're often able to
              respond within 24 hours. So, hang tight!{" "}
            </p>
            <cite>-Dennis Hart</cite>
          </>
        </div>
        <form
          name="Couch Appointments"
          className="intakeForm"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ display: formDisplay }}
        >
          <h1>Appointment Intake Form</h1>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
            }}
          >
            <input type="hidden" name="form-name" value="Couch Appointments" />
            <label>
              Name:
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
              Email:
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </label>
            <label>
              How many faces are we drawing? (Pets and babies count)
              <input
                name="numberOfFaces"
                type="number"
                min="1"
                max="10"
                value={numberOfFaces}
                onChange={(e) => {
                  setNumberOfFaces(e.target.value);
                }}
              />
            </label>
            <label>
              One-Color Shaded $20/person
              <input
                type="radio"
                name="style"
                value="One-Color Shaded"
                checked={colorStyle === "One-Color Shaded"}
                onChange={(e) => {
                  setColorStyle(e.target.value);
                }}
              />
            </label>
            <label>
              Full Color $30/person
              <input
                type="radio"
                name="style"
                value="Full Color"
                checked={colorStyle === "Full Color"}
                onChange={(e) => {
                  setColorStyle(e.target.value);
                }}
              />
            </label>
          </div>
          <div
            style={{ display: "block", flexFlow: "row nowrap", gap: "20px" }}
          >
            <label>
              Preferred Date and Time:
              <input
                name="date"
                type="date"
                onChange={(e) => {
                  setAppointmentDate(e.target.value);
                }}
              />
            </label>

            {/* <label>Preferred Time: </label> */}
            <div className="timeButtonContainer">
              {appointmentTimes.map((x, i) => {
                return (
                  <input
                    name="time"
                    type="button"
                    className="timeButton"
                    key={i}
                    value={x}
                    onMouseUp={(e) => {
                      setAppointmentStartTime(e.target.value);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="commentBox">
            <label>
              Is there anything else you'd like to let us know:
              <textarea
                name="details"
                type="textbox"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              ></textarea>
              {/* <cite className="error" style={{ display: warning }}>
                Looks like you've got some missing info there.
              </cite> */}
            </label>{" "}
            <div className="review">
              <h2>{name}</h2>
              {email}
              <br />
              Drawing {numberOfFaces} subjects in {colorStyle}.
              <br />
              Meeting on {appointmentDate} at {appointmentStartTime}.
              <p>Notes: {details}</p>
            </div>
            <button className="submit" disabled={isDisabled} submit="true">
              Submit
            </button>
          </div>
        </form>
        {/* {<div style={{ display: thankYouVisible ? "flex" : "none" }} />} */}
      </div>
    </>
  );
}
