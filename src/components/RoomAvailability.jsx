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
      <center>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
            </div>
          </div>
        </nav>
      </center>
      <div className="image-slider">
        {/* <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
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
