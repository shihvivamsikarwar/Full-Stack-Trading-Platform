import React from "react";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1 className="fs-4">Open a Zerodha account</h1>
        <p className="mt-3 fs-6 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-4"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
