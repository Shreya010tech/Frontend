import React from "react";
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

// function hoverimg1
// {

// }

const ExecutiveRoomAvailability = ({initializeDatabase}) => {
  const [roomData, setRoomData] = useState({});
  const [roomDataPart1, setRoomDataPart1] = useState({});
  const [roomDataPart2, setRoomDataPart2] = useState({});
  const [roomDataPart3, setRoomDataPart3] = useState({});

  useEffect(() => {
    async function fetchInitialData() {
      let roomResData = await getRoomsData("executive");
      if(roomResData.success){
        setRoomData(roomResData.data);
      }
    }
    setTimeout(() => {
      fetchInitialData();
    }, 3000);
  }, []);

  useEffect(() => { divideDataAccordingToRow(); }, [roomData])



  // Get : Get room no and their availability status
  // params : roomType ->  ('standard', 'delux', 'executive') only
  // return : 1. {success: true, data: {101: {av: '0', bookingid: ""}, 
  //                                    102: {av:'1',bookingid:""}, 
  //                                    103: {av:'2',bookingid:""}}              IF ALL OK.av
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
                Duluxe
              </NavLink>
              <NavLink className="nav-link text-primary" to="/Executive">
                <u>Executive</u>
              </NavLink>
            </div>
          </center>
        </div>
      </nav>
      <div className="image-slider-executive">
        {/* <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://plus.unsplash.com/premium_photo-1661874901387-7d272fa36c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYWNlJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1532119663789-58252470755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhbGFjZSUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className={"imgfix-rooms"}
                id="roomimage"
                alt="..."
              />
              <div id="roomimgoverlay">
                <div className="textofroom">Room 200</div>
              </div>
            </div>
          </div></div>
          <div className="row">
          <div className="col-sm">
            <div id="imgcontainer">
              <img
                src="https://images.unsplash.com/photo-1563396984259-c296a53e3c24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBhbGFjZSUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1598902572700-ce5972e68deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBhbGFjZSUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
              <div className={`${roomav.av == '0' ? 'roomcircleyellow' : ''} ${roomav.av == '1' ? 'roomcirclegreen' : ''} ${roomav.av == '2' ? 'roomcirclered' : ''}`} >
                {roomno}
              </div>
            </div>
          })}
        </div>
        <div className="row">
          {roomDataPart2 && Object.entries(roomDataPart2).map(([roomno, roomav]) => {
            return <div key={roomno} className="col-sm">
              <div className={`${roomav.av == '0' ? 'roomcircleyellow' : ''} ${roomav.av == '1' ? 'roomcirclegreen' : ''} ${roomav.av == '2' ? 'roomcirclered' : ''}`} >
                {roomno}
              </div>
            </div>
          })}
        </div>
        <div className="row">
          {roomDataPart3 && Object.entries(roomDataPart3).map(([roomno, roomav]) => {
            return <div key={roomno} className="col-sm">
              <div className={`${roomav.av == '0' ? 'roomcircleyellow' : ''} ${roomav.av == '1' ? 'roomcirclegreen' : ''} ${roomav.av == '2' ? 'roomcirclered' : ''}`} >
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

export default ExecutiveRoomAvailability;
