import React from "react";
import homeimg from "../img/homeimg.png";
import "../CustomCss/home3css.css";
import { NavLink } from "react-router-dom";
const Home3 = () => {
  return (
    <div className="container" id="fixheight">
      <div className="left">
        <div>
          <h1>
            Welcome to <br />
            Siliguri Hotel Management Association
          </h1>
          <h3>
            Let’s make ourself best <br />& make ordinary, extraordinary
          </h3>
          <NavLink to="/Reservation">
          <button className="btn btn-primary">Reservation</button>
          </NavLink>&nbsp;
          <NavLink to="/AllReservations">
          <button className="btn btn-primary">All Reservations</button>
          </NavLink>&nbsp;
          <NavLink to="/ReservationConfirmation">
          <button className="btn btn-primary">Reservation Confirmation</button>
          </NavLink>&nbsp;
        </div>
      </div>
      <div className="right">
        <img src={homeimg} style={{marginTop:"30%",width:"100%",minHeight:"500px",minWidth:"800px"}} className="imgfix" />
      </div>
    </div>
  );
};

export default Home3;
