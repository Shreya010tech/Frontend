/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "../CustomCss/Reservation.css";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

const AllReservations = () => {


  useEffect(() => {
    async function fetchInitialData() {
      let reservationResData = await getAllReservationData();
      // let reservationResData = await getReservationData('Ok','o','99999');
      console.log(reservationResData);
    }
    fetchInitialData();
  }, [])
  

  // GetAll : Get all reservation data (orderBy: recent booking first)
  // params : none 
  // return : 1. {success: true, data: [<Array of all reservation data>{},{}]}        IF ALL OK
  //          2. {success: false, msg: 'Something Went Wrong'}                        IF INTERNAL SERVER ERROR
  const getAllReservationData = async()=>{
    try{
      let reservationData = await db.collection('reservation').orderBy('bookingdate', 'desc').get();
      return {success: true, data: reservationData}
    }catch(e){
      console.log("AllReservationPageError (getAllReservationData) : ",e);
      return {success:false, msg: "Something Went Wrong"}
    }
  }


  // Get : Get all reservation data based on a particular guest (orderBy: recent booking first)
  // params : guestfirstname, guestlastname, guestphoneno
  // return : 1. {success: true, data: [<Array of all reservation data>{},{}]}        IF ALL OK
  //          2. {success: false, msg: 'No Reservations Found!'}                      IF DATA NOT FOUND
  //          3. {success: false, msg: 'Something Went Wrong'}                        IF INTERNAL SERVER ERROR
  const getReservationData = async(guestfirstname, guestlastname, guestphoneno) =>{
    try{
      let reservationData = await db.collection('reservation').orderBy('bookingdate', 'desc').get();

      const filteredData = reservationData.filter(reservation => {
        return reservation.name.firstname == guestfirstname && reservation.name.lastname == guestlastname && reservation.phoneno == guestphoneno;
      });

      if(!filteredData.length) return {success:false, msg: 'No Reservations Found!'}
      return {success: true, data: filteredData}
    }catch(e){
      console.log("AllReservationPageError (getReservationData) : ",e);
      return {success:false, msg: "Something Went Wrong"}
    }
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
          <div className="table-responsive height-500 bg-skyblue mt-4">
            <table className="table table-borderless text-primary">
              <thead>
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Guest Name</th>
                  <th scope="col">Arrival Date</th>
                  <th scope="col">Departure Date</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>fat</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReservations;
