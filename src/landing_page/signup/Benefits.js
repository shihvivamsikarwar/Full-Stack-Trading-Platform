import React from "react";

function Benefits() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 text-center">
          <img
            src="media/images/acop-benefits.svg"
            style={{ width: "70%", margin: "23% 0% 0% 0%" }}
            className=""
          ></img>
          <h1 className="mt-3 fs-3">
            Benefits of opening a Zerodha demat account
          </h1>
        </div>
        <div className="col-6">
          <h1 className="mt-5 fs-4">Unbeatable pricing</h1>
          <p className="mt-4 text-muted">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            <br />
            intraday and F&O trades.
          </p>
          <h1 className="mt-5 fs-4">Best investing experience</h1>
          <p className="mt-4 text-muted">
            Simple and intuitive trading platform with an easy-to-understand
            user
            <br /> interface.
          </p>
          <h1 className="mt-5 fs-4">No spam or gimmicks</h1>
          <p className="mt-4 text-muted">
            Committed to transparency — no gimmicks, spam, "gamification", or
            <br />
            intrusive push notifications.
          </p>
          <h1 className="mt-5 fs-4">The Zerodha universe</h1>
          <p className="mt-4 text-muted">
            More than just an app — gain free access to the entire ecosystem of
            <br />
            our partner products.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Benefits;
