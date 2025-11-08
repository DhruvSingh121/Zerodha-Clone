import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5 ">Invest in Everything</h1>
        <p className="text-muted">
          Online Platform to invest in stocks, derivatives, mutual funds
        </p>
        <button
          style={{ width: "25%", margin: " 0 auto" }}
          className="p-3 btn btn-primary fs-5 mb-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
