import React from "react";
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

// function hoverimg1
// {

// }

const ExecutiveRoomAvailability = () => {
  const [roomData, setRoomData] = useState({});
  const [roomDataPart1, setRoomDataPart1] = useState({});
  const [roomDataPart2, setRoomDataPart2] = useState({});
  const [roomDataPart3, setRoomDataPart3] = useState({});

  useEffect(() => {
    initializeDatabase();                                       // Note :  Must present before using any backend query

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



  // Dependency : If roomavailability collection doesn't exist create one
  // 0 == "Occupied"(yellow)    ---     1 == "Available"(green)     ---      2 == "Dirty"(red)
  // params : none             return : none
  const initializeDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      await db.collection("roomavailability").add({
        standard:  {  101: { av: "1", bookingid: ""}, 102: { av: "1", bookingid: ""},  103: { av: "1", bookingid: ""}, 104: { av: "1", bookingid: ""},  105: { av: "1", bookingid: ""}, 106: { av: "1", bookingid: ""},  107: { av: "1", bookingid: ""}, 108: { av: "2", bookingid: ""},  109: { av: "1", bookingid: ""}, 110: { av: "1", bookingid: ""},  111: { av:"1", bookingid: ""}, 112: { av:"1", bookingid: ""},  113: { av:"1", bookingid: ""}, 114: { av:"1", bookingid: ""},  115: { av:"1", bookingid: ""}, 116: { av:"1", bookingid: ""},  117: { av:"1", bookingid: ""}, 118: { av:"1", bookingid: ""}, },
        delux:     {  201: { av: "1", bookingid: ""}, 202: { av: "1", bookingid: ""},  203: { av: "2", bookingid: ""}, 204: { av: "1", bookingid: ""},  205: { av: "1", bookingid: ""}, 206: { av: "1", bookingid: ""},  207: { av: "1", bookingid: ""}, 208: { av: "1", bookingid: ""},  209: { av: "1", bookingid: ""}, 210: { av: "1", bookingid: ""},  211: { av:"1", bookingid: ""}, 212: { av:"1", bookingid: ""},  213: { av:"1", bookingid: ""}, 214: { av:"1", bookingid: ""},  215: { av:"1", bookingid: ""}, 216: { av:"2", bookingid: ""},  217: { av:"1", bookingid: ""}, 218: { av:"1", bookingid: ""}, },
        executive: {  301: { av: "1", bookingid: ""}, 302: { av: "1", bookingid: ""},  303: { av: "2", bookingid: ""}, 304: { av: "1", bookingid: ""},  305: { av: "1", bookingid: ""}, 306: { av: "1", bookingid: ""},  307: { av: "1", bookingid: ""}, 308: { av: "1", bookingid: ""},  309: { av: "1", bookingid: ""}, 310: { av: "1", bookingid: ""},  311: { av:"1", bookingid: ""}, 312: { av:"1", bookingid: ""},  313: { av:"1", bookingid: ""}, 314: { av:"1", bookingid: ""},  315: { av:"1", bookingid: ""}, 316: { av:"1", bookingid: ""},  317: { av:"2", bookingid: ""}, 318: { av:"1", bookingid: ""}, },
      });
    }
  };

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
