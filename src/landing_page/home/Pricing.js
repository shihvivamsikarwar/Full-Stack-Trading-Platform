import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5 mx-5" style={{ width: "45%" }}>
          <h1 className="fs-3">Unbeatable pricing</h1>
          <p className="text-muted fs-5.5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2" style={{ width: "10%" }}>
          <img src="media/images/pricing-eq.svg"></img>
          <p className="fs-6">Free account opening</p>
        </div>
        <div className="col-2 mx-5" style={{ width: "10%" }}>
          <img src="media/images/pricing-eq.svg"></img>
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div className="col-3 mx-5" style={{ width: "10%" }}>
          <img src="media/images/other-trades.svg"></img>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
