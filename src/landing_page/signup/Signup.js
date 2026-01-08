import React from "react";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="fs-2 text-center mt-5">
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 text-center mt-2 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="col-6">
          <img
            src="/media/images/account_open.svg"
            className="mt-5"
            style={{ width: "80%", marginLeft: "120px" }}
          ></img>
        </div>
        <div className="col-6 mt-4">
          <h1 className="mt-4 fs-3">Signup now</h1>
          <p className="text-muted">Or track your existing application</p>
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "25%", margin: "0 auto" }}
          >
            Get OTP
          </button>
          <p className="mt-3 text-mutted">
            By proceeding, you agree to the Zerodha{" "}
            <a href="" style={{ textDecoration: "none" }}>
              terms & privacy policy
            </a>
          </p>
          <p>
            Looking to open NRI account?{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
