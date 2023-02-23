import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllReservations from "./components/AllReservations";
import Application from "./components/Application";
import Home from "./components/Home";
import Home3 from "./components/home3";
import Profile from "./components/Profile";
import Reservation from "./components/Reservation";
import ReservationConfirmation from "./components/ReservationConfirmation";
import RoomAvailability from "./components/RoomAvailability";

const App = () => {
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
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/RoomAvailability" element={<RoomAvailability />} />
        <Route exact path="/Application" element={<Application />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
};

export default App;
