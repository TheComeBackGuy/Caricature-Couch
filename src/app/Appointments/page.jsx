"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import "../../components/styles/appearances.css";
import Polaroid from "@/components/Polaroid";
import PromoSmall from "@/components/PromoSmall";

export default function Appointments() {
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
    ["10:00am", "10:30am"],
    ["11:00am", "11:30am"],
    ["12:00pm", "12:30pm"],
    ["1:00pm", "1:30pm"],
    ["2:00pm", "2:30pm"],
    ["3:00pm", "3:30pm"],
    ["4:00pm", "4:30pm"],
    ["5:00pm", "5:30pm"],
    ["6:00pm", "6:30pm"],
    ["7:00pm", "7:30pm"],
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
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
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
      <div className='polaroidContainer'>
        <Polaroid
          rotate={-5}
          z={1}
          image='guest7'
          imageAlt={"a couple getting holding up their drawing"}
          text='Getting a bit sillier is fun'
        />{" "}
        <Polaroid
          rotate={0}
          z={0}
          image='guest8'
          imageAlt={"a couple getting holding up their drawing"}
          text='We love giving couples a keepsake to remember. '
        />
        <Polaroid
          rotate={5}
          z={2}
          image='guest9'
          imageAlt={"a couple getting holding up their drawing"}
          text='Play on, short king!'
        />{" "}
        <Polaroid
          rotate={5}
          z={2}
          image='guest11'
          imageAlt={"a couple getting holding up their drawing"}
          text=' '
        />
      </div>

      <div className='contentContainer' style={{ marginTop: "40px" }}>
        <h1 className='pageHeader'>Walk up or plan an appointment</h1>

        <div
          className='intakeForm'
          style={{ display: thankYouDisplay, flexFlow: "column nowrap" }}
        >
          <h1>Thanks, {name}!</h1>
          <>
            <p>
              We're super excited to meet and draw you! We're often able to
              respond within 24 hours. So, hang tight!{" "}
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
              If you need to cancel for any reason, please email us. Your
              deposit will be lost.
            </p>
            <cite>-Dennis Hart</cite>
          </>
        </div>

        <div className='appointmentContainer'>
          {/* <ul className='steps'>
            <li>
              <h1>Walk-up or Make an Appointment</h1>
            </li>
            <li>
              <h1>5</h1>
              <br />
              <p>Fill out the form</p>
            </li>
            <li>
              <>
                <h1>2</h1>
                <br />
                <p> Wait for your confirmation email</p>
              </>
            </li>
            <li>
              <h1>3</h1>
              <br />
              <p> Show up for your appointment</p>
            </li>
          </ul> */}

          <div style={{ display: formDisplay }}>
            <form
              name='Couch Appointments'
              className='intakeForm'
              method='POST'
              data-netlify='true'
              netlify-honeypot='bot-field'
              onSubmit={handleSubmit}
            >
              <div className='formHeader'>
                <h1>Appointment Intake Form</h1>
              </div>

              <div
                style={{
                  display: "flex",
                  flexFlow: "column wrap",
                }}
              >
                <input
                  type='hidden'
                  name='form-name'
                  value='Couch Appointments'
                />
                <h3>Contact Information</h3>
                <label>
                  Name:
                  <input
                    name='name'
                    type='text'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                </label>{" "}
                <label>
                  Email:
                  <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </label>
                <h3>Number of Faces</h3>
                <label>
                  How many faces are we drawing including pets?
                  <input
                    name='numberOfFaces'
                    type='number'
                    min='1'
                    max='10'
                    value={numberOfFaces}
                    onChange={(e) => {
                      setNumberOfFaces(e.target.value);
                    }}
                  />
                </label>
                <h3> What style drawing would you like?</h3>
                <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                  <label style={{ textAlign: "center" }}>
                    <input
                      type='radio'
                      name='style'
                      value='Black & White'
                      checked={colorStyle === "Black & White"}
                      onChange={(e) => {
                        setColorStyle(e.target.value);
                      }}
                    />
                    <br />
                    B&W Lineart
                    <br /> $15/person
                  </label>
                  <label style={{ textAlign: "center" }}>
                    <input
                      type='radio'
                      name='style'
                      value='One-Color Shaded'
                      checked={colorStyle === "One-Color Shaded"}
                      onChange={(e) => {
                        setColorStyle(e.target.value);
                      }}
                    />
                    <br />
                    Grey Shaded
                    <br /> $20/person
                  </label>
                  <label style={{ textAlign: "center" }}>
                    <input
                      type='radio'
                      name='style'
                      value='Full Color'
                      checked={colorStyle === "Full Color"}
                      onChange={(e) => {
                        setColorStyle(e.target.value);
                      }}
                    />
                    <br />
                    Full Color
                    <br /> $30/person
                  </label>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  flexFlow: "row nowrap",
                  gap: "20px",
                }}
              >
                <h3>Request a Time</h3>
                <p>
                  Preferred Date:
                  <label>
                    <input
                      name='date'
                      type='date'
                      onChange={(e) => {
                        setAppointmentDate(e.target.value);
                      }}
                    />
                  </label>
                </p>
                <p>Preferred Time:</p>
                {/* <label>Preferred Time: </label> */}
                <div className='timeButtonContainer'>
                  {appointmentTimes.map((x, i) => {
                    return (
                      <div className='timeBlockHour' key={i}>
                        <input
                          name='time'
                          type='button'
                          className='timeButton'
                          key={i[0]}
                          value={x[0]}
                          onMouseUp={(e) => {
                            setAppointmentStartTime(e.target.value);
                          }}
                        />
                        <input
                          name='time'
                          type='button'
                          className='timeButton'
                          key={i[1]}
                          value={x[1]}
                          onMouseUp={(e) => {
                            setAppointmentStartTime(e.target.value);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='commentBox'>
                <label>
                  Is there anything else you'd like to let us know:
                  <textarea
                    name='details'
                    type='textbox'
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                  ></textarea>
                  {/* <cite className="error" style={{ display: warning }}>
                Looks like you've got some missing info there.
                </cite> */}
                </label>{" "}
                <div className='review'>
                  <h2>{name}</h2>
                  {email}
                  <br />
                  Drawing {numberOfFaces} subjects in {colorStyle}.
                  <br />
                  Meeting on {appointmentDate} at {appointmentStartTime}.
                  <p>Notes: {details}</p>
                </div>
                <button className='submit' disabled={isDisabled} submit='true'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* {<div style={{ display: thankYouVisible ? "flex" : "none" }} />} */}
      </div>
    </>
  );
}
