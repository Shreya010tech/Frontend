import React from "react";
import homeimg from "../img/homeimg.png";
import "../CustomCss/home3css.css";
const Home3 = () => {
  return (
   <div className="container" id="fixheight">
        <div className="left">
           <div>
            <h1>Welcome to <br>
                Siliguri Hotel Management Association</h1>
            <h3>Let’s make ourself best <br>
                & make ordinary, extraordinary</h3>
           </div>
        </div>
        <div className="right">
            <img src={homeimg} className="imgfix"/>
        </div>
    </div>
  );
};

export default Home3;
