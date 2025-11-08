import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam
            pariatur totam mollitia omnis enim reiciendis consectetur similique,
            ipsam reprehenderit!
          </p>
          <ul>
            <div className="row">
              <div className="col-6">
                <li>
                  <p>Features and Options</p>
                </li>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
              </div>
              <div className="col-6 ">
                <li>
                  <p>Future & Options</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds</p>
                </li>
              </div>
              <img
                src="media\images\pressLogos.png"
                alt=""
                style={{ width: "85%" }}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Awards;
