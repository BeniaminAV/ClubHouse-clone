import React, { useState } from "react";
import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.PhoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your Phone Number</h1>
      <PhoneInput international defaultCountry="RO" value={value} onChange={setValue}/>
      <p>
        By entering your number, you're aggreing to our{" "}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks
      </p>
      <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next <img src="/images/nextArrowIcon.svg" alt="ml-1" />
      </Link>
    </div>
  );
}
export default PhoneConfirmation;
