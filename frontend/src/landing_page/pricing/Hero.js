import React from "react";

function Hero() {
  return (
    <>
      <div className="container ">
        <div className="row border-bottom p-5 mt-5 text-center">
          <h1>Pricing</h1>
          <p className="text-muted fs-5">
            Free equity investments and flat ₹20 traday and F&O trades
          </p>
        </div>
        <div className="row ">
          <div className="col-4 p-5 text-center">
            <img src="/media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted" style={{ lineHeight: "1.5rem" }}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5 text-center">
            <img src="/media/images/pricing-other.svg" alt="" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted" style={{ lineHeight: "1.5rem" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5 text-center">
            <img src="/media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted" style={{ lineHeight: "1.5rem" }}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
