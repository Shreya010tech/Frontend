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
        <div className="container mb-1">
          <div className="d-flex justify-content-end column-gap-3">
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light button-padding-5"
            >
              <i className="bx bxs-building"></i>Reservation
            </button>
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light button-padding-5"
            >
              <i className="bx bxs-plus-square"></i>Add
            </button>
            <button
              type="button"
              className="d-flex align-items-center text-primary btn btn-light button-padding-5"
            >
              <i className="bx bxs-x-circle"></i>Cancel
            </button>
          </div>
          <form className="row g-3 bg-skyblue d-flex align-items-center justify-content-center mt-0 p-1">
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Guest Name
              </label>
              <div className="col-sm-7 d-flex column-gap-1">
                <select id="designation" className="form-select w-50 height-30">
                  <option selected> </option>
                  <option>Mr.</option>
                  <option>Master</option>
                  <option>Miss</option>
                  <option>Mrs.</option>
                </select>
                <input type="text" className="form-control height-30" id="inputName"/>
                <input type="text" className="form-control height-30" id="inputName"/>
                <input type="text" className="form-control height-30" id="inputName"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="Phone Number" className="col-sm-3 col-form-label">
                Phone No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputNumber"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="address" className="col-sm-3 col-form-label">
                Address{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputAddress"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="company" className="col-sm-3 col-form-label">
                Company{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputCompany"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="arrivalDate" className="col-sm-3 col-form-label">
                Arrival Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control height-30"
                  id="inputArrivalDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="designation" className="col-sm-6 col-form-label">
                  Designation{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputDesignation"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="travelAgent" className="col-sm-4 col-form-label">
                  Travel Agent{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputTravelAgent"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="depDate" className="col-sm-3 col-form-label">
                Departure Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control height-30"
                  id="inputDepartureDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="arrivalTime" className="col-sm-3 col-form-label">
                Arrival Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control height-30"
                  id="inputArrivalTime"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="arrivalTime" className="col-sm-3 col-form-label">
                Type of Room{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 height-30 large-button-width-60 large-button-font-size-12"
                >
                  Standard
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 height-30 large-button-width-60 large-button-font-size-12"
                >
                  Delux
                </button>
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 height-30 large-button-width-60 large-button-font-size-12"
                >
                  Executive
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="depTime" className="col-sm-3 col-form-label">
                Departure Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control height-30"
                  id="inputDepartureTime"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="pax" className="col-sm-3 col-form-label">
                No of Pax{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputPax"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="roomNo" className="col-sm-6 col-form-label">
                  Room No{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputRoomNo"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="travelAgent" className="col-sm-4 col-form-label">
                  No of Room{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputNoOfRoom"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="modeOfArrival" className="col-sm-3 col-form-label">
                Mode of Arrival{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputModeofArrival"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="trainNo" className="col-sm-3 col-form-label">
                Train No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputTrainNo"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="flightNo" className="col-sm-3 col-form-label">
                Flight No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputFlightNo"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="roomRate" className="col-sm-3 col-form-label">
                Room Rate{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputRoomRate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="modeOfPayment" className="col-sm-3 col-form-label">
                Mode of Payment{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5  large-button-width-60 large-button-font-size-12"
                >
                  Cash
                </button>
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5  large-button-width-60 large-button-font-size-12"
                >
                  Card
                </button>
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5  large-button-width-60 large-button-font-size-12"
                >
                  UPI
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
                <div className="col-md-6 d-flex align-items-center">
                    <label htmlFor="roomNo" className="col-sm-6 col-form-label">Discount amount </label>
                    <div class="col-sm-5">
                        <input type="text" className="form-control height-30" id="inputRoomNo" />
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <label htmlFor="travelAgent" className="col-sm-4 col-form-label">Discount % </label>
                    <div class="col-sm-4">
                        <input type="text" className="form-control height-30" id="inputNoOfRoom" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="cardNo" className="col-sm-3 col-form-label">
                Card No{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputCardNo"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="upi" className="col-sm-3 col-form-label">
                UPI{" "}
              </label>
              <div className="col-sm-7">
                <input type="text" className="form-control height-30" id="inputupi"/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="dateOfBooking" className="col-sm-3 col-form-label">
                Date of Booking{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control height-30"
                  id="inputBookingDate"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="mealPlan" className="col-sm-3 col-form-label">
                Meal Plan{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 large-button-width-40 large-button-font-size-12"
                >
                  TP
                </button>
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 large-button-width-40 large-button-font-size-12"
                >
                  CP
                </button>
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 large-button-width-40 large-button-font-size-12"
                >
                  AP
                </button>
                <button
                  type="button"
                  className="w-70 height-30 d-flex align-items-center justify-content-center text-light btn btn-primary button-padding-5 large-button-width-40 large-button-font-size-12"
                >
                  MAP
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex rev-margin-gap">
              <label htmlFor="request" className="col-sm-3 col-form-label">
                Special Request{" "}
              </label>
              <div className="col-sm-7">
                <textarea
                  className="form-control"
                  id="inputRequest"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column rev-margin-rev-margin-gap">
              <div className="col-12 d-flex align-items-center">
                <label
                  htmlFor="reservationAssistant"
                  className="col-sm-3 col-form-label"
                >
                  Reservation Assistant Name{" "}
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputReservationAssistantName"
                  />
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <button type="submit" className="d-flex align-items-center justify-content-center text-light btn btn-primary height-30 button-padding-5">
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
