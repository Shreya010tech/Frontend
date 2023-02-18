/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CustomCss/Reservation.css";

const Reservation = () => {
  return (
    <div>
      <div className="bg-light h-100">
        <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <a className="text-primary" href="/#">
                <i className="bx bx-chevrons-left"></i>
              </a>
              <h5 className="text-primary">Reservation</h5>
            </div>
          </div>
        </nav>
        <div className="container mb-5">
          <div className="d-flex justify-content-end column-gap-3">
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light"
            >
              <i className="bx bxs-building"></i>Reservation
            </button>
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light"
            >
              <i className="bx bxs-plus-square"></i>Add
            </button>
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light"
            >
              <i className="bx bxs-x-circle"></i>Cancel
            </button>
          </div>
          <form className="row g-3 bg-skyblue d-flex align-items-center justify-content-center mt-2 p-2">
            <div className="col-md-6 d-flex align-items-center">
              <label for="name" className="col-sm-3 col-form-label">
                Guest Name
              </label>
              <div className="col-sm-7 d-flex column-gap-1">
                <select id="designation" className="form-select">
                  <option selected> </option>
                  <option>Mr.</option>
                  <option>Master</option>
                  <option>Miss</option>
                  <option>Mrs.</option>
                </select>
                <input type="text" className="form-control" id="inputName" />
                <input type="text" className="form-control" id="inputName" />
                <input type="text" className="form-control" id="inputName" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="Phone Number" className="col-sm-3 col-form-label">
                Phone No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputNumber" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="address" className="col-sm-3 col-form-label">
                Address{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputAddress" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="company" className="col-sm-3 col-form-label">
                Company{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputCompany" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="arrivalDate" className="col-sm-3 col-form-label">
                Arrival Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  id="inputArrivalDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="col-md-6 d-flex align-items-center">
                <label for="designation" className="col-sm-6 col-form-label">
                  Designation{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="inputDesignation"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label for="travelAgent" className="col-sm-4 col-form-label">
                  Travel Agent{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="inputTravelAgent"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="depDate" className="col-sm-3 col-form-label">
                Departure Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  id="inputDepartureDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="arrivalTime" className="col-sm-3 col-form-label">
                Arrival Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control"
                  id="inputArrivalTime"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="arrivalTime" className="col-sm-3 col-form-label">
                Type of Room{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  Standard
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  Delux
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  Executive
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="depTime" className="col-sm-3 col-form-label">
                Departure Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control"
                  id="inputDepartureTime"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="pax" className="col-sm-3 col-form-label">
                No of Pax{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputPax" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="col-md-6 d-flex align-items-center">
                <label for="roomNo" className="col-sm-6 col-form-label">
                  Room No{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="inputRoomNo"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label for="travelAgent" className="col-sm-4 col-form-label">
                  No of Room{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="inputNoOfRoom"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="modeOfArrival" className="col-sm-3 col-form-label">
                Mode of Arrival{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputModeofArrival"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="trainNo" className="col-sm-3 col-form-label">
                Train No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputTrainNo" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="flightNo" className="col-sm-3 col-form-label">
                Flight No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputFlightNo"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="roomRate" className="col-sm-3 col-form-label">
                Room Rate{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputRoomRate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="modeOfPayment" className="col-sm-3 col-form-label">
                Mode of Payment{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  Cash
                </button>
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  Card
                </button>
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  UPI
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="discount" className="col-sm-3 col-form-label">
                Discount{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputDiscount"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="cardNo" className="col-sm-3 col-form-label">
                Card No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputCardNo" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="upi" className="col-sm-3 col-form-label">
                UPI{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputupi" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="dateOfBooking" className="col-sm-3 col-form-label">
                Date of Booking{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control"
                  id="inputBookingDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <label for="mealPlan" className="col-sm-3 col-form-label">
                Meal Plan{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  TP
                </button>
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  CP
                </button>
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  AP
                </button>
                <button
                  type="button"
                  className="w-70 d-flex align-items-center justify-content-center text-light btn btn-primary"
                >
                  MAP
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <label for="request" className="col-sm-3 col-form-label">
                Special Request{" "}
              </label>
              <div className="col-sm-7">
                <textarea
                  className="form-control"
                  id="inputRequest"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <div className="col-12 d-flex align-items-center">
                <label
                  for="reservationAssistant"
                  className="col-sm-3 col-form-label"
                >
                  Reservation Assistant Name{" "}
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id="inputReservationAssistantName"
                  />
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
