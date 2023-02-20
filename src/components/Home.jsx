import React from "react";
import homeimg from "../img/homeimg.png";
const Home = () => {
  return (
    <div className="container" id="HomeCss">
      <div className="row">
        <div className="col-sm" id="homeimgcss">
          <img src={homeimg} className="imgfix" />
        </div>
        <div className="col-sm">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
