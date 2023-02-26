import React from "react";
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

// function hoverimg1
// {

// }

const DuluxeRoomAvailability = () => {
  const [hoverdImg, setHoverdImg] = useState("");

  useEffect(() => {
    initializeDatabase(); // Note :  Must present before using any backend query

    async function fetchInitialData() {
      let roomResData = await getRoomsData("standard");
      console.log(roomResData);
    }
    setTimeout(() => {
      fetchInitialData();
    }, 3000);
  }, []);

  // Dependency : If roomavailability collection doesn't exist create one
  // 0 == "Occupied"(yellow)    ---     1 == "Available"(green)     ---      2 == "Dirty"(red)
  // params : none             return : none
  const initializeDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      await db.collection("roomavailability").add({
        standard: {
          101: "0",
          102: "1",
          103: "2",
          104: "1",
          105: "2",
          106: "0",
          107: "0",
          108: "2",
          109: "1",
          110: "0",
          111: "1",
          112: "2",
          113: "1",
          114: "2",
          115: "0",
          116: "0",
          117: "2",
          118: "1",
        },
        delux: {
          201: "0",
          202: "1",
          203: "2",
          204: "1",
          205: "2",
          206: "0",
          207: "0",
          208: "2",
          209: "1",
          210: "0",
          211: "1",
          212: "2",
          213: "1",
          214: "2",
          215: "0",
          216: "0",
          217: "2",
          218: "1",
        },
        executive: {
          301: "0",
          302: "1",
          303: "2",
          304: "1",
          305: "2",
          306: "0",
          307: "0",
          308: "2",
          309: "1",
          310: "0",
          311: "1",
          312: "2",
          313: "1",
          314: "2",
          106: "0",
          316: "0",
          317: "2",
          318: "1",
        },
      });
    }
  };

  // Get : Get room no and their availability status
  // params : roomType ->  ('standard', 'delux', 'executive') only
  // return : 1. {success: true, data: {101: '00', 102: '01', 103: '02'}}        IF ALL OK
  //          2. {success: false, msg: 'Invalid Input'}                          IF INVALID INPUT
  //          3. {success: false, msg: 'Something went wrong'}                   IF INTERNAL SERVER ERROR
  const getRoomsData = async (roomType) => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      return { success: false, msg: "Something Went Wrong" };
    }

    let data = await db.collection("roomavailability").get();
    let roomData = data[0][roomType];

    if (!roomData) {
      return { success: false, msg: "Invalid Input" };
    }

    return { success: true, data: roomData };
  };

  // Reset : delete collection then reinitialize collection
  // params : none             return : none
  // eslint-disable-next-line
  const resetDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();
    if (collectionExist.length) {
      await db.collection("roomavailability").delete();
    }
    await initializeDatabase();
  };

  const handleImgBtnMouseEnter = (whichImg) => {
    setHoverdImg(whichImg);
  };

  const handleImgBtnMouseLeave = () => {
    setHoverdImg("");
  };

  return (
    <>
    <nav className="navbar sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <NavLink className="text-primary" to="/#">
              <i className="bx bx-chevrons-left"></i>
            </NavLink>
            <h5 className="text-primary">Room Availaibility</h5>
          </div>
        </div>
      </nav>
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <center>
            <div className="navbar-nav">
              <NavLink
                className="nav-link active text-primary"
                aria-current="page"
                to="/RoomAvailability"
              >
                Standard
              </NavLink>
              <NavLink className="nav-link text-primary" to="/Duluxe">
                <u>Duluxe</u>
              </NavLink>
              <NavLink className="nav-link text-primary" to="/Executive">
                Executive
              </NavLink>
            </div>
          </center>
        </div>
      </nav>
      <div className="image-slider-duluxe">
        <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className={`imgfix-rooms ${
                  hoverdImg == "100" ? "hover-image-zoom" : ""
                }`}
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
                src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className={`imgfix-rooms ${
                  hoverdImg == "200" ? "hover-image-zoom" : ""
                }`}
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 200</div>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className={`imgfix-rooms ${
                  hoverdImg == "300" ? "hover-image-zoom" : ""
                }`}
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
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className={`imgfix-rooms ${
                  hoverdImg == "400" ? "hover-image-zoom" : ""
                }`}
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
            <div
              className="roomcirclered"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("100");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              100
            </div>
          </div>
          <div className="col-sm">
            <div
              className="roomcircleyellow"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("200");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              200
            </div>
          </div>
          <div className="col-sm">
            <div
              className="roomcirclegreen"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("300");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              300
            </div>
          </div>
          <div className="col-sm">
            <div
              className="roomcirclered"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("400");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              400
            </div>
          </div>
          <div className="col-sm">
            <div
              className="roomcircleyellow"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("100");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              100
            </div>
          </div>
          <div className="col-sm">
            <div
              className="roomcirclegreen"
              onMouseEnter={() => {
                handleImgBtnMouseEnter("200");
              }}
              onMouseLeave={handleImgBtnMouseLeave}
            >
              200
            </div>
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
    </> 
  );
};

export default DuluxeRoomAvailability;
