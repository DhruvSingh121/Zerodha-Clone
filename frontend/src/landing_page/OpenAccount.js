import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-3">Open a Zerodha Account</h1>
        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          style={{ width: "20%", margin: " 0 auto" }}
          className="p-2 btn btn-primary fs-5 mt-3 mb-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
