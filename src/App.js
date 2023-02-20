import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllReservations from "./components/AllReservations";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Reservation from "./components/Reservation";
import ReservationConfirmation from "./components/ReservationConfirmation";

const App = () => {
  return (
    <>
      {/* Routes Setup */}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/AllReservations" element={<AllReservations />} />
        <Route exact path="/Reservation" element={<Reservation />} />
        <Route
          exact
          path="/ReservationConfirmation"
          element={<ReservationConfirmation />}
        />
        <Route exact path="/Profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
};

export default App;
