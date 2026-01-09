import React from "react";
function Explore() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="mt-5 fs-3 text-center">
          Explore different account types
        </h1>
        <span
          className="border border-2 rounded p-2  mt-5"
          style={{ width: "28%", margin: "0 auto" }}
        >
          <h1 className="mt-4 mx-5 fs-5">Individual Account</h1>
          <p className=" mt-4 mx-5 text-muted">
            Invest in equity, mutual funds and derivatives
          </p>
        </span>
        <span
          className="border border-2 rounded p-2  mt-5"
          style={{ width: "28%", margin: "0 auto" }}
        >
          <h1 className="mt-4 mx-5 fs-5">HUF Account</h1>
          <p className="mt-4 mx-5 text-muted">
            Make tax-efficient investments for your family
          </p>
        </span>
        <span
          className="border border-2 rounded p-2 mt-5"
          style={{ width: "28%", margin: "0 auto" }}
        >
          <h1 className="mt-4 mx-5  fs-5">NRI Account</h1>
          <p className="mt-4 mx-5  text-muted">
            Invest in equity, mutual funds, debentures, and more
          </p>
        </span>
      </div>
      <div className="row p-5">
        <span
          className="border border-2 rounded p-2 mx-4"
          style={{ width: "28%", margin: "0 auto" }}
        >
          <h1 className="mt-4 mx-5  fs-5">Minor Account</h1>
          <p className="mt-4 mx-5 text-muted">
            Teach your little ones about money & invest for their future with
            them
          </p>
        </span>
        <span
          className="border border-2 rounded p-2 mx-5"
          style={{ width: "28%", margin: "0 auto" }}
        >
          <h1 className="mt-4 mx-5  fs-5">Corporate / LLP/ Partnership</h1>
          <p className=" mt-4 mx-5 text-muted">
            Manage your business surplus and investments easily
          </p>
        </span>
        <span className="" style={{ width: "30%", margin: "0 auto" }}></span>
      </div>
    </div>
  );
}
export default Explore;
