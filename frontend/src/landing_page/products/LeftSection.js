import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container border-top mb-5">
        <div className="row ">
          <div className="col-6">
            <img src={imageURL} alt="" />
          </div>

          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href={learnMore}
                style={{ textDecoration: "none", marginLeft: "50px" }}
              >
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Badges */}
            <div>
              <a href={googlePlay} style={{ textDecoration: "none" }}>
                <img src="media\images\googlePlayBadge.svg   " alt="" />
              </a>
              <a
                href={appStore}
                style={{ textDecoration: "none", marginLeft: "30px" }}
              >
                <img src="media\images\appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
