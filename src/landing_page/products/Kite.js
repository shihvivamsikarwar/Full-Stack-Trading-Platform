import React from "react";
function Kite() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/Kite.png"
            className=""
            style={{ width: "80%", marginLeft: "8rem" }}
          ></img>
        </div>
        <div
          className="col-6 p-5 mt-5"
          style={{ width: "40%", marginLeft: "8rem" }}
        >
          <h2 className="fs-3">Kite</h2>
          <p className="mt-4">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Try More →
          </a>
          <a href="" style={{ textDecoration: "none" }} className="mx-5">
            Learn more →<br />
          </a>
          <img src="media/images/googlePlayBadge.svg" className="mt-4"></img>
          <img src="media/images/appstoreBadge.svg" className="mt-4 mx-5"></img>
        </div>
      </div>

      <div className="row mt-5">
        <div
          className="col-6 p-5"
          style={{ width: "40%", marginLeft: "5rem", marginTop: "10rem" }}
        >
          <h2 className="fs-3">Console</h2>
          <p className="mt-4">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn more →<br />
          </a>
        </div>
        <div className="col-6">
          <img src="media/images/console.png" style={{ width: "95%" }}></img>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src="media/images/coin.png"
            className=""
            style={{ width: "80%", marginLeft: "8rem" }}
          ></img>
        </div>
        <div
          className="col-6 p-5 mt-5"
          style={{ width: "40%", marginLeft: "8rem" }}
        >
          <h2 className="fs-3">Coin</h2>
          <p className="mt-4">
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Coin → <br />
          </a>
          <img src="media/images/googlePlayBadge.svg" className="mt-4"></img>
          <img src="media/images/appstoreBadge.svg" className="mt-4 mx-5"></img>
        </div>
      </div>

      <div className="row mt-5">
        <div
          className="col-6 p-5"
          style={{ width: "40%", marginLeft: "5rem", marginTop: "10rem" }}
        >
          <h2 className="fs-3">Kite Connect API</h2>
          <p className="mt-4">
            Build powerful trading platforms and experiences with our super
            simple HTTP/JSON APIs. If you are a startup, build your investment
            app and showcase it to our clientbase.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Kite Connect →<br />
          </a>
        </div>
        <div className="col-6">
          <img
            src="media/images/kiteconnect.png"
            style={{ width: "95%" }}
            className="mt-5"
          ></img>
        </div>
      </div>

      <div className="row">
        <div className="col-6 mt-5">
          <img
            src="media/images/varsity.png"
            style={{ width: "50%", marginLeft: "15rem" }}
            className="mt-5"
          ></img>
        </div>
        <div
          className="col-6 p-5"
          style={{ width: "40%", marginLeft: "8rem", marginTop: "8rem" }}
        >
          <h2 className="fs-3">Varsity mobile</h2>
          <p className="mt-4">
            An easy to grasp, collection of stock market lessons with in-depth
            coverage and illustrations. Content is broken down into bite-size
            cards to help you learn on the go.
          </p>

          <img src="media/images/googlePlayBadge.svg" className="mt-4"></img>
          <img src="media/images/appstoreBadge.svg" className="mt-4 mx-5"></img>
        </div>
        <h1 className="fs-4 mt-5 text-center ">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>
    </div>
  );
}
export default Kite;
