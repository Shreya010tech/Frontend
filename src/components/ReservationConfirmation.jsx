/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState } from "react";
import "../CustomCss/Reservation.css";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

const ReservationConfirmation = () => {
  const [amountPaid, setAmountPaid] = useState("");


  useEffect(() => {
    async function fetchInitialData() {
      let reservationResData = await getReservationData('M0CVG2zNKhaYsd');
      console.log(reservationResData);
    }
    fetchInitialData();
  }, [])
  

  // Get : Get particular reservation data based on bookingid
  // params : bookingid
  // return : 1. {success: true, data: {<reservation_data_obj>} }                     IF ALL OK
  //          2. {success: false, msg: 'Reservation Not Found!'}                      IF BOOKINGID NOT PRESENT
  //          3. {success: false, msg: 'Something Went Wrong'}                        IF INTERNAL SERVER ERROR
  const getReservationData = async(bookingid) =>{
    try{
      let reservationData = await db.collection('reservation').doc({ bookingid: bookingid }).get()

      if(!reservationData) return {success:false, msg: "Reservation Not Found!"}
      return {success: true, data: reservationData}
    }catch(e){
      console.log("ReservationConfirmationPageError (getReservationData) : ",e);
      return {success:false, msg: "Something Went Wrong"}
    }
  }



  const handleInputChange = (e) => {
    if(e.target.name == "amountpaid"){ setAmountPaid(e.target.value) }
  }

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
                  <h3 className="pt-2 text-primary small-font-size-20">
                    Booking has been done Successfully
                  </h3>
                </div>
              </div>
              <div className="d-flex medium-flex-column mb-3">
                <div className="width-50percent medium-width-full d-flex">
                  <label htmlFor="bookingId" className="fs-5 text-primary padding-right-20 medium-padding-right-50 extra-small-padding-right-35">
                    Booking Id
                  </label>
                  <div>
                    <h5 className="pt-1">#wb15238pl</h5>
                  </div>
                </div>
                <div className="width-50percent medium-width-full d-flex">
                  <label htmlFor="guestName" className="fs-5 text-primary padding-right-20 medium-padding-right-40 extra-small-padding-right-35">
                    Guest Name
                  </label>
                  <div>
                    <h5 className="pt-1">Mr. Anirban Sen</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex medium-flex-column mb-3">
                <div className="width-50percent medium-width-full d-flex">
                  <label htmlFor="checkIn" className="fs-5 text-primary padding-right-36 medium-padding-right-70">
                    Check In
                  </label>
                  <div>
                    <h5 className="pt-1">09-08-2023</h5>
                    <h5>11:04 A.M onwards</h5>
                  </div>
                </div>
                <div className="width-50percent medium-width-full d-flex">
                  <label htmlFor="checkout" className="fs-5 text-primary padding-right-36 medium-padding-right-55">
                    Check Out
                  </label>
                  <div>
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
                    htmlFor="amountpaid"
                    className="col-sm-3 col-form-label fw-bold"
                  >
                    Amount Paid
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      id="inputAmount"
                      name="amountpaid" value={amountPaid} onChange={handleInputChange}
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
