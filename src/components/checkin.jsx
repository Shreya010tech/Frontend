import React from "react";
import "../CustomCss/checkin.css";
import homeimg from "../img/homeimg.png";

const CheckIn = () => {
  return (
    <>
      <div class="header-part">
        <ul>
          <li class="check-header"><a href="#">&#8810; Check-In</a></li>
          <li class="side-icon"><a href="#"><img src={homeimg} height="50px" width="50px" /></a></li>
        </ul>
      </div>
      <div class="container-part">
        <div class="left-form">
          <div class="left-up">
            <form action="/action_page.php">
              <label for="fname">Room Type</label>
              <input type="submit" id="meal" value="Standard" />
              <input type="submit" id="meal" value="Deluxe" />
              <input type="submit" id="meal" value="Executive" />
              <br />
              <label for="fname">No. of Rooms</label>
              <input list="browsers" name="browser" id="meal dropdowns" />
              <datalist id="browsers">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
              </datalist>
              <br />
              <label for="fname">Room No.</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="fname">Reservation Type</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="birthday">Booking Date</label>
              <input type="date" id="birthday" name="birthday" />
              <br />
              <label for="fname">Extra Bed type</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="fname">Meal Plan</label>
              <input type="submit" id="meal" value="EP" />
              <input type="submit" id="meal" value="CP" />
              <input type="submit" id="meal" value="AP" />
              <input type="submit" id="meal" value="MAP" />
            </form>
          </div>
          <div class="left-below">
            <label for="birthday">Booking Date</label>
            <input type="date" id="birthday" name="birthday" />
            at
            <input type="time" id="appt" name="appt" />
            <br />
            <label for="fname">Nights</label>
            <input list="browsers" name="browser" id="meal dropdowns" />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
            <br />
            <label for="birthday">Departure Date</label>
            <input type="date" id="birthday" name="birthday" />
            at
            <input type="time" id="appt" name="appt" />
            <br />
            <label for="fname">Room Rate</label>
            <input type="text" id="fname" name="fname" placeholder="in Ruppees" />
            <br />
            <label for="fname">Discount Amount</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Percent</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Payment Type</label>
            <input type="submit" id="meal" value="Cash" />
            <input type="submit" id="meal" value="Card" />
            <input type="submit" id="meal" value="UPI" />
            <br />
            <label for="fname">GST</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Deposit</label>
            <input type="text" id="fname" name="fname" placeholder="in Ruppees" />
            <br />
            <label for="fname">Special Request</label>
            <input type="text" id="fname" name="fname" />
          </div>
        </div>
        <div class="right-form">
          <div class="right-buttons">
            <button class="btn info">+ ADD</button>
            <button class="btn info">x CANCEL</button>
          </div>
          <div class="right-content">
            <label for="fname">Guest Name</label>
            <input list="titles" name="title" id="dropdowns" />
            <datalist id="titles">
              <option value="Mr." />
              <option value="Ms." />
              <option value="Mrs." />
            </datalist>
            <input type="text" id="guest-name" name="first-name" placeholder="first name" />
            <input type="text" id="guest-name" name="Middle-name" placeholder="middle name" />
            <input type="text" id="guest-name" name="Last-name" placeholder="last name" />
            <br />
            <label for="fname">IC No.</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Phone No.</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Company Name</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Address</label><br />
            <textarea name="message" rows="3" cols="70"></textarea>
            <br />
            <label for="fname">City</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">State</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Zip</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Tel</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Adults</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Children</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">City Ledget Acct</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Group ID</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="fname">Country</label>
            <input type="submit" id="meal" value="India" />
            <input type="submit" id="meal" value="Other" />
            <div class="india">
              <label for="fname">Aadhar No.</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="myfile">Guest Aadhar Photo</label>
              <input type="file" id="myfile" name="myfile" />
            </div>
            <div class="other">
              <label for="fname">Passpost No.</label>
              <input type="text" id="fname" name="fname" />
              <label for="fname">Visa No.</label>
              <input type="text" id="fname" name="fname" />
              <input type="file" id="myfile" name="myfile" />
              <br />
              <label for="birthday">Date of Issue</label>
              <input type="date" id="birthday" name="birthday" />
              <br />
              <label for="fname">Arrived From</label>
              <input type="text" id="fname" name="fname" />
              <label for="fname">Place of issue</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="fname">Purposed duration of stay in hotel</label>
              <input type="text" id="fname" name="fname" />
              </div>
          </div>
        </div>
      </div>
      <div class="submission">
        <div class="sub">
          <button id="book-btn"><a href="#">Booking Hold</a></button>
        </div>
        <div class="sub">
          <button id="book-btn"><a href="#">Pay and Book</a></button>
        </div>
        <div class="sub">
          <button id="book-btn"><a href="#">Book</a></button>
        </div>
      </div>
    </>
  );
};

export default CheckIn;