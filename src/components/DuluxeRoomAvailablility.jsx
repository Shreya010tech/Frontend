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
  const [roomData, setRoomData] = useState({});
  const [roomDataPart1, setRoomDataPart1] = useState({});
  const [roomDataPart2, setRoomDataPart2] = useState({});
  const [roomDataPart3, setRoomDataPart3] = useState({});

  useEffect(() => {
    initializeDatabase();                                       // Note :  Must present before using any backend query

    async function fetchInitialData() {
      let roomResData = await getRoomsData("delux");
      if(roomResData.success){
        setRoomData(roomResData.data);
      }
    }
    setTimeout(() => {
      fetchInitialData();
    }, 3000);
  }, []);

  useEffect(() => { divideDataAccordingToRow(); }, [roomData])



  // Dependency : If roomavailability collection doesn't exist create one
  // 0 == "Occupied"(yellow)    ---     1 == "Available"(green)     ---      2 == "Dirty"(red)
  // params : none             return : none
  const initializeDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      await db.collection("roomavailability").add({
        standard: { 101: "0", 102: "1", 103: "1", 104: "1", 105: "0", 106: "1", 107: "1", 108: "2", 109: "1", 110: "0", 111: "1", 112: "1", 113: "1", 114: "1", 115: "1", 116: "0", 117: "1", 118: "1", },
        delux: {  201: "1", 202: "1",  203: "2", 204: "1",  205: "1", 206: "0",  207: "0", 208: "1",  209: "1", 210: "1",  211: "1", 212: "1",  213: "1", 214: "1",  215: "1", 216: "2",  217: "1", 218: "0", },
        executive: {  301: "1", 302: "1",  303: "2", 304: "1",  305: "1", 306: "1",  307: "1", 308: "1",  309: "1", 310: "1",  311: "1", 312: "1",  313: "1", 314: "1",  315: "0", 316: "1",  317: "2", 318: "1", },
      });
    }
  };

  // Get : Get room no and their availability status
  // params : roomType ->  ('standard', 'delux', 'executive') only
  // return : 1. {success: true, data: {101: '0', 102: '1', 103: '2'}}           IF ALL OK
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


  const divideDataAccordingToRow = ()=>{
    const objectKeys = Object.keys(roomData);
    const objectValues = Object.values(roomData);

    const divIndex = Math.ceil(objectKeys.length / 3);

    const keys1 = objectKeys.slice(0, divIndex);
    const keys2 = objectKeys.slice(divIndex, divIndex * 2);
    const keys3 = objectKeys.slice(divIndex * 2);

    const values1 = objectValues.slice(0, divIndex);
    const values2 = objectValues.slice(divIndex, divIndex * 2);
    const values3 = objectValues.slice(divIndex * 2);

    const part1Obj = keys1.reduce(  (acc, curr, index) => ({ ...acc, [curr]: values1[index] }), {}  );
    const part2Obj = keys2.reduce(  (acc, curr, index) => ({ ...acc, [curr]: values2[index] }), {}  );
    const part3Obj = keys3.reduce(  (acc, curr, index) => ({ ...acc, [curr]: values3[index] }), {}  );

    setRoomDataPart1(part1Obj);
    setRoomDataPart2(part2Obj);
    setRoomDataPart3(part3Obj);
  }


  return (
    <>
    <nav className="navbar sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <NavLink className="text-primary" to="/Home3">
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
        {/* <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className={"imgfix-rooms"}
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
                className={"imgfix-rooms"}
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
                className={"imgfix-rooms"}
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
                className={"imgfix-rooms"}
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 400</div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Rooms icons */}
        <div className="row">
          {roomDataPart1 && Object.entries(roomDataPart1).map(([roomno, roomav]) => {
            return <div key={roomno} className="col-sm">
              <div className={`${roomav == '0' ? 'roomcircleyellow' : ''} ${roomav == '1' ? 'roomcirclegreen' : ''} ${roomav == '2' ? 'roomcirclered' : ''}`} >
                {roomno}
              </div>
            </div>
          })}
        </div>
        <div className="row">
          {roomDataPart2 && Object.entries(roomDataPart2).map(([roomno, roomav]) => {
            return <div key={roomno} className="col-sm">
              <div className={`${roomav == '0' ? 'roomcircleyellow' : ''} ${roomav == '1' ? 'roomcirclegreen' : ''} ${roomav == '2' ? 'roomcirclered' : ''}`} >
                {roomno}
              </div>
            </div>
          })}
        </div>
        <div className="row">
          {roomDataPart3 && Object.entries(roomDataPart3).map(([roomno, roomav]) => {
            return <div key={roomno} className="col-sm">
              <div className={`${roomav == '0' ? 'roomcircleyellow' : ''} ${roomav == '1' ? 'roomcirclegreen' : ''} ${roomav == '2' ? 'roomcirclered' : ''}`} >
                {roomno}
              </div>
            </div>
          })}
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
