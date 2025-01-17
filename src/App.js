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
    isAuthenticated();
  }, [])
  

  // Dependency : If roomavailability collection doesn't exist create one
  // 0 == "Occupied"(yellow)    ---     1 == "Available"(green)     ---      2 == "Dirty"(red)
  // params : none             return : none
  const initializeRoomAvDatabase = async () => {
    let collectionExist = await db.collection("roomavailability").get();

    if (!collectionExist.length) {
      await db.collection("roomavailability").add({
        standard:  {  101: { av: "1", activeBookings: []}, 102: { av: "1", activeBookings: []},  103: { av: "1", activeBookings: []}, 104: { av: "1", activeBookings: []},  105: { av: "1", activeBookings: []}, 106: { av: "1", activeBookings: []},  107: { av: "1", activeBookings: []}, 108: { av: "2", activeBookings: []},  109: { av: "1", activeBookings: []}, 110: { av: "1", activeBookings: []},  111: { av:"1", activeBookings: []}, 112: { av:"1", activeBookings: []},  113: { av:"1", activeBookings: []}, 114: { av:"1", activeBookings: []},  115: { av:"1", activeBookings: []}, 116: { av:"1", activeBookings: []},  117: { av:"1", activeBookings: []}, 118: { av:"1", activeBookings: []}, },
        delux:     {  201: { av: "1", activeBookings: []}, 202: { av: "1", activeBookings: []},  203: { av: "2", activeBookings: []}, 204: { av: "1", activeBookings: []},  205: { av: "1", activeBookings: []}, 206: { av: "1", activeBookings: []},  207: { av: "1", activeBookings: []}, 208: { av: "1", activeBookings: []},  209: { av: "1", activeBookings: []}, 210: { av: "1", activeBookings: []},  211: { av:"1", activeBookings: []}, 212: { av:"1", activeBookings: []},  213: { av:"1", activeBookings: []}, 214: { av:"1", activeBookings: []},  215: { av:"1", activeBookings: []}, 216: { av:"2", activeBookings: []},  217: { av:"1", activeBookings: []}, 218: { av:"1", activeBookings: []}, },
        executive: {  301: { av: "1", activeBookings: []}, 302: { av: "1", activeBookings: []},  303: { av: "2", activeBookings: []}, 304: { av: "1", activeBookings: []},  305: { av: "1", activeBookings: []}, 306: { av: "1", activeBookings: []},  307: { av: "1", activeBookings: []}, 308: { av: "1", activeBookings: []},  309: { av: "1", activeBookings: []}, 310: { av: "1", activeBookings: []},  311: { av:"1", activeBookings: []}, 312: { av:"1", activeBookings: []},  313: { av:"1", activeBookings: []}, 314: { av:"1", activeBookings: []},  315: { av:"1", activeBookings: []}, 316: { av:"1", activeBookings: []},  317: { av:"2", activeBookings: []}, 318: { av:"1", activeBookings: []}, },
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


  // Check : Check if user is admin or not
  // params : none             
  // return : 1. {success:true,  isAdmin: true}                                           IF ADMIN
  //          2. {success:true, isAdmin: false}                                          IF NOT ADMIN
  //          3. {success:false, isAdmin: false, msg: 'Something Went Wrong' }            IF SERVER ERROR
  const isUserAdmin = ()=>{    
    try{
      if(Cookies.get('role') == 'Admin'){    return {success:true, isAdmin: true};  }
      else{   return {success:true, isAdmin: false}; }
    }catch(e){
      console.log("isUserAdmin : ",e);
      return {success:false, isAdmin: false, msg: 'Something Went Wrong' }
    }
  }


  // Get :  Get all the details of loggedin user
  // params: none
  // return:  1.  {success:true, data: {role:"",username:"",password:"",name:"",                    //  IF ALL OK
  //                email:"",phoneno:"",designation:"",usersince:"",shift:""} }
  //          2.  {success:false, msg: 'User Not Found!'}                                           //  IF LOGIN PROBLEM
  //          3.  {success:false, msg: 'Something Went Wrong'}                                      //  IF SERVER ERROR
  const getLoggedInUserDetails = async()=>{   
    try{
      let username = Cookies.get('username');
      let user = await db.collection("users").doc({ username: username }).get();
      if(!user) return {success:false, msg: 'User Not Found!' }
      return {success:true, data: user};
    }catch(e){
      console.log("getLoggedInUserDetails : ",e);
      return {success:false, msg: 'Something Went Wrong' }
    }
  }


  // Check : Check if user logged in or not  (if not it redirect to Login Page) 
  // params : none             
  // return : 1. {success:true}                                                           IF AUTHENTICATED
  //          2. {success:false, msg: 'Not Logged In'}                                    IF NOT AUTHENTICATED
  //          3. {success:false, msg: 'Something Went Wrong' }                            IF SERVER ERROR
  const isAuthenticated = ()=>{
    try{
      if(Cookies.get('isLoggedIn') == 'true'){    return {success:true};  }
      else{ navigate('/Home');   return {success:false, msg: "Not Logged In"}; }
    }catch(e){
      console.log("isAuthenticated : ",e);
      navigate('/Home');
      return {success:false, msg: 'Something Went Wrong' }
    }
  }


  return (
    <>
      {/* Routes Setup */}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Home3" element={<Home3 />} />
        <Route exact path="/AllReservations" element={<AllReservations isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Reservation" element={<Reservation />} />
        <Route
          exact
          path="/ReservationConfirmation"
          element={<ReservationConfirmation />}
        />
        <Route exact path="/Profile" element={<Profile isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails}/>} />
        <Route exact path="/RoomAvailability" element={<RoomAvailability isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} initializeDatabase={initializeRoomAvDatabase} getLoggedInUserDetails={getLoggedInUserDetails}/>} />
        <Route exact path="/Application" element={<Application isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Notice" element={<Notice isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/GuestHistory" element={<GuestHistory isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Reports" element={<HistoryReports isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Laundry" element={<Laundry isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/CheckIn" element={<CheckIn isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Checkout" element={<CheckOut isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/FandB" element={<FandB isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} getLoggedInUserDetails={getLoggedInUserDetails} />} />
        <Route exact path="/Duluxe" element={<DuluxeRoomAvailability isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} initializeDatabase={initializeRoomAvDatabase} getLoggedInUserDetails={getLoggedInUserDetails}/>} />
        <Route exact path="/Executive" element={<ExecutiveRoomAvailability isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin} initializeDatabase={initializeRoomAvDatabase} getLoggedInUserDetails={getLoggedInUserDetails}/>} />
        <Route path="*" element={<Navigate to="/Home3" replace isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin}/>} />
        <Route path="/Team" element={<Team isAuthenticated={isAuthenticated} isUserAdmin={isUserAdmin}/>} />
      </Routes>
    </>
  );
};

export default App;
