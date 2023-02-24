import React from "react";

// function hoverimg1
// {

// }

const RoomAvailability = () => {
  return (
    <div className="container">
      <nav className="navbar sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <a className="text-primary" href="/#">
              <i className="bx bx-chevrons-left"></i>
            </a>
            <h5 className="text-primary">Room Availaibility</h5>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <center>
            <div className="navbar-nav">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href="#"
              >
                Standard
              </a>
              <a className="nav-link text-primary" href="#">
                <u>Duluxe</u>
              </a>
              <a className="nav-link text-primary" href="#">
                Executive
              </a>
            </div>
          </center>
        </div>
      </nav>
      <div className="image-slider">
        <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="imgfix-rooms"
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 100</div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="imgfix-rooms"
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 200</div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="imgfix-rooms"
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 300</div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600"
                className="imgfix-rooms"
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 400</div>
              </div>
            </div>
          </div>
        </div>
        {/* Rooms icons */}
        <div className="row">
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclered">200</div>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow">300</div>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen">400</div>
          </div>
        </div>
      </div>
      <br />
      <center>
        <div className="row">
          <div className="col-sm">
            <div className="roomcirclered keyvar"></div>
            <b>Dirty</b>
          </div>
          <div className="col-sm">
            <div className="roomcircleyellow keyvar"></div>
            <b>Occupied</b>
          </div>
          <div className="col-sm">
            <div className="roomcirclegreen keyvar"></div>
            <b>Available</b>
          </div>
        </div>
      </center>
    </div>
  );
};

export default RoomAvailability;
