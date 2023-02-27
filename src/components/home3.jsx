import React from "react";
import homeimg from "../img/homeimg.png";
import "../CustomCss/home3css.css";
import { NavLink } from "react-router-dom";
const Home3 = () => {
  return (
    <div className="containerhome3" id="fixheight">
      <div className="left">
        <div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa fa-align-right" aria-hidden="true"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
                style={{ color: "black" }}
              >
                <i
                  id="iconcolor"
                  className="fa fa-angle-double-right"
                  aria-hidden="true"
                  style={{ color: "#4763FD" }}
                ></i>{" "}
                Getting Started
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <NavLink to="/Reservation" className="NavLinks">
                <i
                  id="iconcolor"
                  class="fa fa-id-card-o"
                  aria-hidden="true"
                ></i>
                &nbsp; Reservation
              </NavLink>
              <br />
              <NavLink to="/CheckIn" className="NavLinks">
                <i id="iconcolor" class="fa fa-sign-in" aria-hidden="true"></i>
                &nbsp; Check In
              </NavLink>
              <br />
              <NavLink to="/CheckOut" className="NavLinks">
                <i id="iconcolor" class="fa fa-sign-in" aria-hidden="true"></i>
                &nbsp; Check Out
              </NavLink>
              <br />
              <NavLink to="/RoomAvailability" className="NavLinks">
                <i id="iconcolor" class="fa fa-bed" aria-hidden="true"></i>
                &nbsp; Room Availability
              </NavLink>
              <br />
              <NavLink to="/Laundry" className="NavLinks">
                <i id="iconcolor" class="fa fa-user" aria-hidden="true"></i>
                &nbsp; House Keeping
              </NavLink>
              <br />
              <NavLink to="/FandB" className="NavLinks">
                <i id="iconcolor" class="fa fa-cutlery" aria-hidden="true"></i>
                &nbsp; F & B Service
              </NavLink>
              <br />
              <NavLink to="/GuestHistory" className="NavLinks">
                <i id="iconcolor" class="fa fa-book" aria-hidden="true"></i>
                &nbsp; Guest History
              </NavLink>
              <br />
              <NavLink to="/Reports" className="NavLinks">
                <i
                  id="iconcolor"
                  class="fa fa-file-text"
                  aria-hidden="true"
                ></i>
                &nbsp; Reports
              </NavLink>
              <br />
              <NavLink to="/Application" className="NavLinks">
                <i id="iconcolor" class="fa fa-pencil" aria-hidden="true"></i>
                &nbsp; Application
              </NavLink>
              <br />
              <NavLink to="/Notice" className="NavLinks">
                <i
                  id="iconcolor"
                  class="fa fa-calendar-check-o"
                  aria-hidden="true"
                ></i>
                &nbsp; Notice
              </NavLink>
              <br />
              <NavLink to="/Profile" className="NavLinks">
                <i
                  id="iconcolor"
                  class="fa fa-user-circle"
                  aria-hidden="true"
                ></i>
                &nbsp; Profile
              </NavLink>
              <br />
            </div>
          </div>
          <h1>
            Welcome to <br />
            Siliguri Hotel Management Association
          </h1>
          <h3>
            Let’s make ourself best <br />& make ordinary, extraordinary
          </h3>
        </div>
      </div>
      <div className="right">
        <img
          id="iconcolor"
          mg
          src={homeimg}
          style={{
            marginTop: "45%",
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
