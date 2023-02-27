import React from "react";
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
        <Route exact path="/Notice" element={<Notice />} />
        <Route exact path="/GuestHistory" element={<GuestHistory />} />
        <Route exact path="/Reports" element={<HistoryReports />} />
        <Route exact path="/Laundry" element={<Laundry />} />
        <Route exact path="/CheckIn" element={<CheckIn />} />
        <Route exact path="/Checkout" element={<CheckOut />} />
        <Route exact path="/FandB" element={<FandB />} />
        <Route exact path="/Duluxe" element={<DuluxeRoomAvailability />} />
        <Route
          exact
          path="/Executive"
          element={<ExecutiveRoomAvailability />}
        />
        <Route path="*" element={<Navigate to="/Home" replace />} />
        <Route path="/Team" element={<Team/>} />
      </Routes>
    </>
  );
};

export default App;
