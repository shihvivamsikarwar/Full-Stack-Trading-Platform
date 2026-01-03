import React from "react";

function Hero() {
  return (
    <div className="container p-4">
      <div className="row text-center">
        <img
          src="media/images/homehero.png"
          alt="Hero Image"
          className="mb-6"
        ></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button style={{ width: "30%", margin: "0 auto" }}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
