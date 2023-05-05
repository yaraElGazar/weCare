import axios from "axios";
import classes from "./PayButton.module.css";
import { useState } from "react";

const PayButton = ({ requestDetails }) => {
  const handleCheckout = () => {
    axios
      .post("http://localhost:7000/api/v1/stripe/create-checkout-session", {
        requestDetails,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button className={classes.payBtn} onClick={handleCheckout}>
        CHECKOUT
      </button>
    </>
  );
};

export default PayButton;
