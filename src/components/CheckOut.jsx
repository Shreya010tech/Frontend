import React from "react";
import { NavLink } from "react-router-dom";
import "../CustomCss/out.css";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;


const CheckOut = () => {


  // Delete : Release Room Occupancy from RoomAv. DB
  // params : bookingid   (case sensitive)
  // return : 1. {success: true}                                            IF ALL OK
  //          2. {success:false, msg: "Invalid Booking Details"}            IF BOOKINGID IS INVALID/NOT FOUND
  //          3. {success:false, msg: "Something Went Wrong!"}              IF ROOMAV DB ERROR
  //          4. {success: false, msg: 'Something Went Wrong'}              IF SERVER ERROR
  const releaseRoomOccupancy = async(bookingid)=>{
    try{
      let booking = await db.collection('reservation').doc({ bookingid: bookingid }).get();
      let roomav = await db.collection("roomavailability").get();

      if(!booking) { return {success:false, msg: "Invalid Booking Details"} }
      if(!roomav)  { return {success:false, msg: "Something Went Wrong!"} }

      let rooms = booking.roomno;
      let roomtype = booking.typeofroom;
      roomtype = roomtype.toLowerCase();

      const avroomnos = rooms.split(',').map(value => value.trim()).filter(value => value !== '');

      avroomnos.forEach(avroom =>{
        const roomObj = roomav[0][roomtype][avroom];
        roomObj.av = "1";
        roomObj.activeBookings = roomObj.activeBookings.filter(room => room.bookingid !== bookingid);
      })

      await db.collection('roomavailability').set(roomav);
      return {success: true}
    }catch(e){
      console.log("CheckoutPageError (releaseRoomOccupancy) : ",e);
      return {success: false, msg: 'Something Went Wrong'}
    }
  }



  return (
    <div>
      <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <NavLink className="text-primary" to="/Home3">
              <i className="bx bx-chevrons-left"></i>
            </NavLink>
            <h5 className="text-primary">Check Out</h5>
            <h6 className="text-primary">Copy of Invoice</h6>
          </div>
        </div>
      </nav>
      <div className="containerA px-0" style={{ maxWidth: "100%" }} id="checkoutbody">
        <div className="row1A">
          <div className="lefta">
            <form>
              <div className="form-group">
                <label>Guest Name:</label>
                <input type="text" placeholder="Guest Name" required />
              </div>
              <div className="form-group">
                <label>Travel Agent:</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Company Name:</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Mobile No:</label>
                <input type="Text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Billing:</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>GST ID:</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Bill No:</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Confirmation No:</label>
                <input type="text" placeholder="" required />
              </div>
            </form>
          </div>
          <div className="righta">
            <form>
              <div className="form-group">
                <label>Orginal Bill Date:</label>
                <input type="Date" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>Room No:</label>
                <input type="number" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>No of Rooms:</label>
                <input type="number" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>Room Rate:</label>
                <input type="number" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>No of Guest:</label>
                <input type="number" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>Arrival Date:</label>
                <input type="Date" placeholder="" required />
                at
                <input type="time" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>Departure Date:</label>
                <input type="date" placeholder="" required />
                at
                <input type="time" placeholder="" required />
              </div>
              <br/>
              <div className="form-group">
                <label>Registration No:</label>
                <input type="Number" placeholder="" required />
              </div>
              <br/>
            </form>
          </div>
        </div>
        <br />
        <div className="row2A">
          <table className="tableA">
            <tr bgcolor="#EDF8FD" align="center">
              <th width="100">Date</th>
              <th width="100">Description</th>
              <th width="100">Reference</th>
              <th width="100">Debit</th>
              <th width="100">Credit</th>
            </tr>
            <tr bgcolor="white" align="center">
              <th>Date</th>
              <th>Accomodation ++</th>
              <th>Room</th>
              <th>Amount</th>
              <th></th>
            </tr>
            <tr bgcolor="white" align="center">
              <th>Date</th>
              <th>Accomodations SGST @9%</th>
              <th>Room</th>
              <th>Amount</th>
              <th></th>
            </tr>
            <tr bgcolor="white" align="center">
              <th>Date</th>
              <th>Accomodations CGST @9%</th>
              <th>Room</th>
              <th>Amount</th>
              <th></th>
            </tr>
            <tr bgcolor="white" align="center">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Amount</th>
            </tr>
            <tr bgcolor="#EDF8FD" align="center">
              <th></th>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>Amount</th>
            </tr>
          </table>
        </div>
        <div className="row3A">
          <div className="lefts">
            <form>
              <div className="form-group">
                <label>Casher:</label>
              </div>
            </form>
          </div>
          <div className="rights">
            <form>
              <div className="form-group">
                <label>Guest Signature:</label>
              </div>
            </form>
          </div>
        </div>
        <div className="row4A">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              I agree that I am liable for the following statement.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
