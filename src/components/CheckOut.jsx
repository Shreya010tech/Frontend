import React from "react";
import "../CustomCss/out.css";

const CheckOut = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <a className="text-primary" href="/Home3">
              <i className="bx bx-chevrons-left"></i>
            </a>
            <h5 className="text-primary">Check Out</h5>
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
              <div className="form-group">
                <label>Room No:</label>
                <input type="number" placeholder="" required />
              </div>
              <div className="form-group">
                <label>No of Rooms:</label>
                <input type="number" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Room Rate:</label>
                <input type="number" placeholder="" required />
              </div>
              <div className="form-group">
                <label>No of Guest:</label>
                <input type="number" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Arrival Date:</label>
                <input type="Date" placeholder="" required />
                at
                <input type="time" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Departure Date:</label>
                <input type="date" placeholder="" required />
                at
                <input type="time" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Registration No:</label>
                <input type="Number" placeholder="" required />
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="row2A">
          <table className="table">
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
