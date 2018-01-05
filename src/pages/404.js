import React from "react";
import Link from "gatsby-link";

const NotFoundPage = () => (
  <div style={{ color: "#e4afc7" }}>
    <div
      style={{
        marginTop: "50px",
        textAlign: "center"
      }}
    >
      <h1>Oh...</h1>
      <h2>Nothing to display here</h2>
      <h2>
        Please go back to{" "}
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          homepage
        </Link>
        !
      </h2>
    </div>
  </div>
);

export default NotFoundPage;
