/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CustomCss/Reservation.css";

const ReservationConfirmation = () => {
  return (
    <div>
      <div className="bg-light vh-100">
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
        <div className="container mt-4 mb-5">
          <div className="card">
            <div className="card-body  bg-skyblue">
              <div className="d-flex align-items-center column-gap-5 mb-3">
                <i className="bx bxs-check-circle text-primary"></i>
                <div className="d-flex align-items-center justify-content-center">
                  <h3 className="pt-2 text-primary">
                    Booking has been done Successfully
                  </h3>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-md-6 d-flex">
                  <label for="bookingId" className="col-sm-3 fs-5 text-primary">
                    Booking Id
                  </label>
                  <div className="col-sm-7">
                    <h5 className="pt-1">#wb15238pl</h5>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <label for="guestName" className="col-sm-3 fs-5 text-primary">
                    Guest Name
                  </label>
                  <div className="col-sm-7">
                    <h5 className="pt-1">Mr. Anirban Sen</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-md-6 d-flex">
                  <label for="checkIn" className="col-sm-3 fs-5 text-primary">
                    Check In
                  </label>
                  <div className="col-sm-7">
                    <h5 className="pt-1">09-08-2023</h5>
                    <h5>11:04 A.M onwards</h5>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <label for="checkout" className="col-sm-3 fs-5 text-primary">
                    Check Out
                  </label>
                  <div className="col-sm-7">
                    <h5 className="pt-1">12-08-2023</h5>
                    <h5>With in 11:00 A.M</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center column-gap-1 mb-5">
                <i className="bx bxs-moon text-primary"></i>
                <h5 className="pt-1">3 Nights</h5>
              </div>
              <div className="d-flex flex-column">
                <div className="col-md-6">
                  <h5>1 Standard Room x EP Plan</h5>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <label
                    for="amountPaid"
                    className="col-sm-3 col-form-label fw-bold"
                  >
                    Amount Paid
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAmount"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
