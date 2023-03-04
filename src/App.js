import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllReservations from "./components/AllReservations";
import Application from "./components/Application";
import Notice from "./components/Notice";
import Home from "./components/Home";
import Home3 from "./components/Home3";
import Profile from "./components/Profile";
import Reservation from "./components/Reservation";
import ReservationConfirmation from "./components/ReservationConfirmation";
import RoomAvailability from "./components/RoomAvailability";
import CheckIn from "./components/CheckIn";
import GuestHistory from "./components/GuestHistory";
import HistoryReports from "./components/HistoryReports";
import CheckOut from "./components/CheckOut";
import Laundry from "./components/Laundry";
import DuluxeRoomAvailability from "./components/DuluxeRoomAvailablility";
import ExecutiveRoomAvailability from "./components/ExecutiveRoomAvailability";
import FandB from "./components/FandB";
import Team from "./components/Team";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;


const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initializeRoomAvDatabase();
    initializeUsersDatabase();
    // isAuthenticated();
  }, [])
  

  // Dependency : If roomavailability collection doesn't exist create one
  // 0 == "Occupied"(yellow)    ---     1 == "Available"(green)     ---      2 == "Dirty"(red)
  // params : none             return : none
  const initializeRoomAvDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      await db.collection("roomavailability").add({
        standard:  {  101: { av: "1", bookingid: ""}, 102: { av: "1", bookingid: ""},  103: { av: "1", bookingid: ""}, 104: { av: "1", bookingid: ""},  105: { av: "1", bookingid: ""}, 106: { av: "1", bookingid: ""},  107: { av: "1", bookingid: ""}, 108: { av: "2", bookingid: ""},  109: { av: "1", bookingid: ""}, 110: { av: "1", bookingid: ""},  111: { av:"1", bookingid: ""}, 112: { av:"1", bookingid: ""},  113: { av:"1", bookingid: ""}, 114: { av:"1", bookingid: ""},  115: { av:"1", bookingid: ""}, 116: { av:"1", bookingid: ""},  117: { av:"1", bookingid: ""}, 118: { av:"1", bookingid: ""}, },
        delux:     {  201: { av: "1", bookingid: ""}, 202: { av: "1", bookingid: ""},  203: { av: "2", bookingid: ""}, 204: { av: "1", bookingid: ""},  205: { av: "1", bookingid: ""}, 206: { av: "1", bookingid: ""},  207: { av: "1", bookingid: ""}, 208: { av: "1", bookingid: ""},  209: { av: "1", bookingid: ""}, 210: { av: "1", bookingid: ""},  211: { av:"1", bookingid: ""}, 212: { av:"1", bookingid: ""},  213: { av:"1", bookingid: ""}, 214: { av:"1", bookingid: ""},  215: { av:"1", bookingid: ""}, 216: { av:"2", bookingid: ""},  217: { av:"1", bookingid: ""}, 218: { av:"1", bookingid: ""}, },
        executive: {  301: { av: "1", bookingid: ""}, 302: { av: "1", bookingid: ""},  303: { av: "2", bookingid: ""}, 304: { av: "1", bookingid: ""},  305: { av: "1", bookingid: ""}, 306: { av: "1", bookingid: ""},  307: { av: "1", bookingid: ""}, 308: { av: "1", bookingid: ""},  309: { av: "1", bookingid: ""}, 310: { av: "1", bookingid: ""},  311: { av:"1", bookingid: ""}, 312: { av:"1", bookingid: ""},  313: { av:"1", bookingid: ""}, 314: { av:"1", bookingid: ""},  315: { av:"1", bookingid: ""}, 316: { av:"1", bookingid: ""},  317: { av:"2", bookingid: ""}, 318: { av:"1", bookingid: ""}, },
      });
    }
  };


  // Dependency : If users collection doesn't exist create one
  // params : none             return : none
  const initializeUsersDatabase = async () => {
    let collectionExist = await db.collection("users").get();

    if (!collectionExist.length) {
      await db.collection("users").add({
        role: "Admin",  username: "admin@sithmct",  password: "Admin@123", name:"SIT-HMCT-Admin",  email:"hod_hmct@sittechno.org", 
        phoneno: "1234567891",  designation:"Manager", usersince: "2023", shift: "Morning"
      });
      await db.collection("users").add({
        role: "Employee",  username: "employee@sithmct",  password: "Employee@123", name:"SIT-HMCT-Employee",  email:"hod_hmct@sittechno.org", 
        phoneno: "1234567891",  designation:"Employee", usersince: "2023", shift: "Morning"
      });
    }
  };


  // Check : Check if user logged in or not  (if not it redirect to Login Page) 
  // params : none             return : none
  const isAuthenticated = ()=>{
    setTimeout(() => {    
      try{
        if(Cookies.get('isLoggedIn') == 'true'){    return {success:true};  }
        else{ navigate('/Home');   return {success:false}; }
      }catch(e){
        console.log("isAuthenticated : ",e);
        navigate('/Home');
        return {success:false, msg: 'Something Went Wrong' }
      }
    }, 1000);
  }


  return (
    <>
      {/* Routes Setup */}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Home3" element={<Home3 />} />
        <Route exact path="/AllReservations" element={<AllReservations />} />
        <Route exact path="/Reservation" element={<Reservation />} />
        <Route
          exact
          path="/ReservationConfirmation"
          element={<ReservationConfirmation />}
        />
        <Route exact path="/Profile" element={<Profile isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/RoomAvailability" element={<RoomAvailability isAuthenticated={isAuthenticated} initializeDatabase={initializeRoomAvDatabase}/>} />
        <Route exact path="/Application" element={<Application isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/Notice" element={<Notice isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/GuestHistory" element={<GuestHistory isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/Reports" element={<HistoryReports isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/Laundry" element={<Laundry isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/CheckIn" element={<CheckIn isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/Checkout" element={<CheckOut isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/FandB" element={<FandB isAuthenticated={isAuthenticated}/>} />
        <Route exact path="/Duluxe" element={<DuluxeRoomAvailability isAuthenticated={isAuthenticated} initializeDatabase={initializeRoomAvDatabase}/>} />
        <Route exact path="/Executive" element={<ExecutiveRoomAvailability isAuthenticated={isAuthenticated} initializeDatabase={initializeRoomAvDatabase}/>} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </>
  );
};

export default App;
