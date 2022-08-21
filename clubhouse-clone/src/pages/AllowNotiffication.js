import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

function AllowNotiffication() {
  return (
    <div className={style.PhoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-3">Last, important step!</h1>
        <h1 className="mb-4">
          Enable notifications to know when poeple are speaking
        </h1>
        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>ClubHouse Would Like to Send You Notification</h3>
            <p>Notification may include alerts, sounds, and icon</p>
          </div>
          <div className={style.action_btn}>
            <Link exact to="/home">
              Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <img
              src="/images/handIcon.svg"
              alt=""
              className={style.hand_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotiffication;
