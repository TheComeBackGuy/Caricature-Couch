import React from "react";
import Menu from "../menu.json";
import "./styles/mobileMenu.css";
import Link from "next/link";
export default function MenuList() {
  return (
    <div className="desktopMenuList">
      {Menu.map((m, i) => {
        return (
          <div key={i} className="desktopMenu">
            <Link href={Menu[i].url}>
              {/* <img src="../images/BTN_Appointments.gif" alt="boof" />{" "} */}
              <h2>{Menu[i].title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
