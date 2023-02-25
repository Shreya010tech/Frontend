import React from "react";
import "../CustomCss/lon.css";

const Laundry = () => {
  return (
    <div className="formA">
      <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <a className="text-primary" href="/Home3">
              <i className="bx bx-chevrons-left"></i>
            </a>
            <h5 className="text-primary">
              House Keeping
              <br />
              Laundry
            </h5>
          </div>
        </div>
      </nav>
      <div className="containerAS">
        <div className="col1" id="customgap">
          <p style={{ color: "#2545F8" }}>
            Items<span>Cost</span>
          </p>
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            style={{ color: "#2545F8" }}
          >
            &nbsp;Male
          </i>
          <p>
            Tie C1<span>15 Rs.</span>
          </p>
          <p>
            Dhoti/Lungi C2<span>10 Rs.</span>
          </p>
          <p>
            Shorts C3 <span>20 Rs.</span>
          </p>
          <p>
            Muffler C4<span>50 Rs.</span>
          </p>
          <p>
            Vest C5<span>10 Rs.</span>
          </p>
          <p>
            Under Garments C6<span>50 Rs.</span>
          </p>
          <p>
            Handkerchif C7<span>20 Rs.</span>
          </p>
          <p>
            Shirt C8<span>10 Rs.</span>
          </p>
          <p>
            Trousers C9<span>15 Rs.</span>
          </p>
          <p>
            T-shirt C10<span>15 Rs.</span>
          </p>
          <br />
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            style={{ color: "#2545F8" }}
          >
            &nbsp;Female
          </i>
          <p>
            Saree C11<span>30 Rs.</span>
          </p>
          <p>
            Blouse C12<span>20 Rs.</span>
          </p>
          <p>
            Salwar C13<span>50 Rs.</span>
          </p>
          <p>
            Skirt C14<span>30 Rs.</span>
          </p>
          <p>
            Towel C15<span>40 Rs.</span>
          </p>
          <p>
            Apron C16<span>50 Rs.</span>
          </p>
          <p>
            Trousers/Plazo C17<span>20 Rs.</span>
          </p>
        </div>
        <div className="col2">
          <form>
            <div className="lefta">
              <label>Item Code :</label>
              <input type="text" placeholder="" required />
              <br />
              <br />
              <label>Item Name :</label>
              <input type="text" placeholder="" required />
              <br />
              <br />
              <label>Cost :</label>
              <input type="Number" placeholder="" required />
              <br />
              <br />
              <label>Discount :</label>
              <input type="Number" placeholder="" required />
              <br />
              <br />
              <label>Service Type :</label>
              <select className="form" aria-label="Default select example">
                <option selected></option>
                <option value="1">Pressing</option>
                <option value="2">Wash</option>
                <option value="3">Dry Wash</option>
              </select>
              <br />
              <br />
              <label>Date :</label>
              <input type="date" />
              <br />
              <br />
              <label>Special Request :</label>
              <input type="text" placeholder="" required />
            </div>
            <div className="righta">
              <label>Guest Name :</label>
              <input type="text" placeholder=" Guest Name" required />
              <br />
              <br />
              <label>Room No :</label>
              <input type="Number" placeholder="" required />
              <br />
              <br />
              <label>Arrival Date :</label>
              <input type="date" />
              <br />
              <br />
              <label>Depart Date :</label>
              <input type="date" />
              <br />
              <br />
              <label>Total Item :</label>
              <input type="Number" placeholder="" required />
              <br />
              <br />
              <label>Total Amount :</label>
              <input type="Number" placeholder="" required />
              <br />
              <br />
              <label>Payment : </label>
              <select className="form" aria-label="Default select example">
                <option selected></option>
                <option value="1">Card</option>
                <option value="2">UPI</option>
                <option value="3">Cash</option>
                <option value="3">Pay Later</option>
              </select>
            </div>
            <div className="submita">
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Laundry;
