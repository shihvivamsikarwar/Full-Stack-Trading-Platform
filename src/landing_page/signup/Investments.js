import React from "react";

function Investments() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h2 className="fs-3 text-center mt-5">
          Investment options with Zerodha demat account
        </h2>
        <div className="col-2 p-5 mx-5">
          <img src="/media/images/stocks-acop.svg" className="mt-5"></img>
          <img src="/media/images/ipo-acop.svg" className="mt-5"></img>
        </div>
        <div className="col-3 mt-5">
          <h2 className="fs-4 mt-5">Stocks</h2>
          <p>
            Invest in all exchange-listed <br />
            securities
          </p>
          <h2 className="fs-4 mt-5">IPO</h2>
          <p>
            Apply to the latest IPOs instantly <br /> via UPI
          </p>
        </div>
        <div className="col-2 p-5">
          <img src="/media/images/mf-acop.svg" className="mt-5"></img>
          <img src="/media/images/fo-acop.svg" className="mt-5"></img>
        </div>
        <div className="col-3 mt-5">
          <h2 className="fs-4 mt-5">Mutual funds</h2>
          <p>
            Invest in commission-free direct
            <br /> mutual funds
          </p>
          <h2 className="fs-4 mt-5">Futures & options</h2>
          <p>
            Hedge and mitigate market risk <br />
            through simplified F&O trading
          </p>
        </div>
        <button
          className="p-2 btn btn-primary mt-5 fs-4 "
          style={{ width: "30%", margin: "0 auto" }}
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}
export default Investments;
