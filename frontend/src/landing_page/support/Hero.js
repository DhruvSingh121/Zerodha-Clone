import React from "react";

function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-3 " id="supportWrapper">
          <h4>Support Potal</h4>
          <a href="/">Track Tickets</a>
        </div>
        <div className="row p-3 m-5 ">
          <div className="col-6 p-5 ">
            <p className="fs-4">
              Seach for an answer or browse help topics to create a ticket
            </p>
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />{" "}
            <br />
            <a href="/">Track account opening</a>
            <a href="/">Track segment activation</a>
            <a href="/">Intraday margins</a>
            <a href="/">Kite user manual</a>
          </div>
          <div className="col-6 p-5">
            <p className="fs-4">Features</p>
            <ol>
              <li>
                <a href="/">Current Taakeovers and Delisting - January 2025</a>
              </li>
              <li>
                <a href="/">Latest Intraday Leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
