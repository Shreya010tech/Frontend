import React from "react";
import homeimg from "../img/homeimg.png";
import "../CustomCss/home3css.css";
import { NavLink } from "react-router-dom";
const Home3 = () => {
  return (
    <div className="containerhome3" id="fixheight">
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
          </NavLink>
          &nbsp;
          <NavLink to="/AllReservations">
            <button className="btn btn-primary">All Reservations</button>
          </NavLink>
          &nbsp;
          <NavLink to="/ReservationConfirmation">
            <button className="btn btn-primary">
              Reservation Confirmation
            </button>
          </NavLink>
          &nbsp;
          <NavLink to="/Profile">
            <button className="btn btn-primary">Profile</button>
          </NavLink>
          &nbsp;
          <NavLink to="/RoomAvailability">
            <button className="btn btn-primary">Room Availability</button>
          </NavLink>
          &nbsp;
          <NavLink to="/Application">
            <button className="btn btn-primary">Application</button>
          </NavLink>
          &nbsp;
          <NavLink to="/Notice">
            <button className="btn btn-primary">Notice</button>
          </NavLink>
          &nbsp;
          <NavLink to="/GuestHistory">
            <button className="btn btn-primary">Guest History</button>
          </NavLink>
          &nbsp;
          <NavLink to="/HistoryReports">
            <button className="btn btn-primary">History Reports</button>
          </NavLink>
          &nbsp;
          <NavLink to="/CheckIn">
            <button className="btn btn-primary">Check-In</button>
          </NavLink>
          &nbsp;
          <NavLink to="/Laundry">
            <button className="btn btn-primary">Laundry</button>
          </NavLink>
          &nbsp;
        </div>
      </div>
      <div className="right">
        <img
          src={homeimg}
          style={{
            marginTop: "30%",
            width: "100%",
            minHeight: "500px",
            minWidth: "800px",
          }}
          className="imgfix"
        />
      </div>
    </div>
  );
};

export default Home3;
