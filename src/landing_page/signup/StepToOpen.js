import React from "react";
function StepToOpen() {
  return (
    <div className="container-fluid  bg-light mt-5">
      <div className="row mt-5">
        <h1 className="fs-4 mt-5 text-center">
          Steps to open a demat account with Zerodha
        </h1>
        <div className="col-6">
          <img
            src="/media/images/steps-acop.svg"
            style={{ width: "75%" }}
            className="mt-5 mx-5"
          ></img>
        </div>
        <div className="col-6 mt-5">
          <h2 className="fs-4 mt-3 border-bottom">
            Enter the requested details
          </h2>
          <h2 className="fs-4 mt-5 border-bottom">
            Complete e-sign & verification
          </h2>
          <h2 className="fs-4 mt-5">Start investing!</h2>
        </div>
      </div>
    </div>
  );
}
export default StepToOpen;
