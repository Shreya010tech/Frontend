import React from "react";
import "../CustomCss/checkin.css";
import homeimg from "../img/homeimg.png";

const CheckIn = () => {
  return (
    <>
      <div class="header-part">
        <ul>
          <li class="check-header"><a href="/">&#8810; Check-In</a></li>
          <li class="side-icon"><a href="/"><img src={homeimg} height="50px" width="50px" /></a></li>
        </ul>
      </div>
      <div class="container-part">
        <div class="left-form">
          <div class="left-up">
            <form action="/action_page.php" className="checkin-form">
              <label className="customlabel" for="fname">Room Type</label>
              <input className="custominputs" type="submit" id="meal" value="Standard" />
              <input className="custominputs" type="submit" id="meal" value="Deluxe" />
              <input className="custominputs" type="submit" id="meal" value="Executive" />
              <br />
              <label className="customlabel" for="fname">No. of Rooms</label>
              <input className="custominputs" list="browsers" name="browser" id="meal dropdowns" />
              <datalist id="browsers">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
              </datalist>
              <br />
              <label className="customlabel" for="fname">Room No.</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <br />
              <label className="customlabel" for="fname">Reservation Type</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <br />
              <label className="customlabel" for="birthday">Booking Date</label>
              <input className="custominputs" type="date" id="birthday" name="birthday" />
              <br />
              <label className="customlabel" for="fname">Extra Bed type</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <br />
              <label className="customlabel" for="fname">Meal Plan</label>
              <input className="custominputs" type="submit" id="meal" value="EP" />
              <input className="custominputs" type="submit" id="meal" value="CP" />
              <input className="custominputs" type="submit" id="meal" value="AP" />
              <input className="custominputs" type="submit" id="meal" value="MAP" />
            </form>
          </div>
          <div class="left-below">
            <label className="customlabel" for="birthday">Booking Date</label>
            <input className="custominputs" type="date" id="birthday" name="birthday" />
            at
            <input className="custominputs" type="time" id="appt" name="appt" />
            <br />
            <label className="customlabel" for="fname">Nights</label>
            <input className="custominputs" list="browsers" name="browser" id="meal dropdowns" />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
            <br />
            <label className="customlabel" for="birthday">Departure Date</label>
            <input className="custominputs" type="date" id="birthday" name="birthday" />
            at
            <input className="custominputs" type="time" id="appt" name="appt" />
            <br />
            <label className="customlabel" for="fname">Room Rate</label>
            <input className="custominputs" type="text" id="fname" name="fname" placeholder="in Ruppees" />
            <br />
            <label className="customlabel" for="fname">Discount Amount</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">Percent</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Payment Type</label>
            <input className="custominputs" type="submit" id="meal" value="Cash" />
            <input className="custominputs" type="submit" id="meal" value="Card" />
            <input className="custominputs" type="submit" id="meal" value="UPI" />
            <br />
            <label className="customlabel" for="fname">GST</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Deposit</label>
            <input className="custominputs" type="text" id="fname" name="fname" placeholder="in Ruppees" />
            <br />
            <label className="customlabel" for="fname">Special Request</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
          </div>
        </div>
        <div class="right-form">
          <div class="right-buttons">
            <button className="custombutton" class="btn info">+ ADD</button>
            <button className="custombutton" class="btn info">x CANCEL</button>
          </div>
          <div class="right-content">
            <label className="customlabel" for="fname">Guest Name</label>
            <input className="custominputs" list="titles" name="title" id="dropdowns" />
            <datalist id="titles">
              <option value="Mr." />
              <option value="Ms." />
              <option value="Mrs." />
            </datalist>
            <input className="custominputs" type="text" id="guest-name" name="first-name" placeholder="first name" />
            <input className="custominputs" type="text" id="guest-name" name="Middle-name" placeholder="middle name" />
            <input className="custominputs" type="text" id="guest-name" name="Last-name" placeholder="last name" />
            <br />
            <label className="customlabel" for="fname">IC No.</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">Phone No.</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Company Name</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Address</label><br />
            <textarea className="customtextarea" name="message" rows="3" cols="70"></textarea>
            <br />
            <label className="customlabel" for="fname">City</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">State</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Zip</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">Tel</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Adults</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">Children</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">City Ledget Acct</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <label className="customlabel" for="fname">Group ID</label>
            <input className="custominputs" type="text" id="fname" name="fname" />
            <br />
            <label className="customlabel" for="fname">Country</label>
            <input className="custominputs" type="submit" id="meal" value="India" />
            <input className="custominputs" type="submit" id="meal" value="Other" />
            <div class="india">
              <label className="customlabel" for="fname">Aadhar No.</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <br />
              <label className="customlabel" for="myfile">Guest Aadhar Photo</label>
              <input className="custominputs" type="file" id="myfile" name="myfile" />
            </div>
            <div class="other">
              <label className="customlabel" for="fname">Passpost No.</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <label className="customlabel" for="fname">Visa No.</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <input className="custominputs" type="file" id="myfile" name="myfile" />
              <br />
              <label className="customlabel" for="birthday">Date of Issue</label>
              <input className="custominputs" type="date" id="birthday" name="birthday" />
              <br />
              <label className="customlabel" for="fname">Arrived From</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <label className="customlabel" for="fname">Place of issue</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              <br />
              <label className="customlabel" for="fname">Purposed duration of stay in hotel</label>
              <input className="custominputs" type="text" id="fname" name="fname" />
              </div>
          </div>
        </div>
      </div>
      <div class="submission">
        <div class="sub">
          <button className="custombutton" id="book-btn"><a href="#">Booking Hold</a></button>
        </div>
        <div class="sub">
          <button className="custombutton" id="book-btn"><a href="#">Pay and Book</a></button>
        </div>
        <div class="sub">
          <button className="custombutton" id="book-btn"><a href="#">Book</a></button>
        </div>
      </div>
    </>
  );
};

export default CheckIn;