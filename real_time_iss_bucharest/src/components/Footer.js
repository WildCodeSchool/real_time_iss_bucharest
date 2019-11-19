import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      style={{
        position: "relative",
        width: "100%",
        // top: "50vh",
        height: "100px",
        background: '#f8f9fa'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
            <p style={{ fontSize: "27px" }}>
              <u>
                <a className="link" href="https://github.com/WildCodeSchool/real_time_iss_bucharest/" style={{ textDecoration: "none" }}>
                <span style={{ color: "#000761" }}>A</span>
                <span style={{ color: "#44008B" }}>W</span>
                <span style={{ color: "#4B666B" }}>E</span>
                <span style={{ color: "#1E2852" }}>S</span>
                <span style={{ color: "#182141" }}>O</span>
                <span style={{ color: "#44008B" }}>M</span>
                <span style={{ color: "#115268" }}>E</span>
                <span style={{ color: "black", fontSize: "25px" }}>   Team</span>
                </a>
              </u>{" "}
            </p>
            <p className="h6">
              © All right Reserved
            <a
                className="text-green ml-2"
                href="https://www.wildcodeschool.com/en-GB"
                target="_blank"
              >
                WildCodeSchool © 2019
            </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;