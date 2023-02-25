/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import "../CustomCss/Reservation.css";
import ShortUniqueId from "short-unique-id";
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

const Reservation = () => {
  const [roomTypeBtnColor, setRoomTypeBtnColor] = useState("");
  const [paymentTypeBtnColor, setPaymentTypeBtnColor] = useState("");
  const [mealTypeBtnColor, setMealTypeBtnColor] = useState("");

  const [guestName, setGuestName] = useState({ title: "", firstname: "", middlename: "", lastname: "", });
  const [address, setAddress] = useState({ ad1: "", city: "", state: "", zip: "", });
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setdepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [noOfPax, setNoOfPax] = useState("");
  const [modeOfArrival, setModeOfArrival] = useState("");
  const [trainNo, setTrainNo] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [roomRate, setRoomRate] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [upi, setUpi] = useState("");
  const [mealPlan, setMealPlan] = useState("");
  const [travelAgentName, setTravelAgentName] = useState("");
  const [resAssisName, setResAssisName] = useState("");
  const [specialReq, setSpecialReq] = useState("");


  const addReservationData = async()=>{
    try{
      let uid = new ShortUniqueId({ length: 20 });   let udbid = uid();
      let ubid = new ShortUniqueId({ length: 12 });  let ubookingid = ubid();
      
      db.collection('reservation').add({
          id: udbid,  bookingid: ubookingid,  name: guestName,  address: address, icno: "", 
          phoneno: guestPhoneNumber,  telno: "",  companyname: companyName, designation: designation,

          checkcountry: "", aadhaarno: "",  passportno: "", visano: "", passportdateofissue: "",  
          arrivedfrom: "",  placeofissue: "", purdurofstayinhotel: "",

          cityledgetacct: "", groupid: "",

          adultno: "",  childno: "",

          bookingdate: bookingDate, arrivaldate: arrivalDate, arrivaltime: arrivalTime, 
          departuredate: departureDate, departuretime: departureTime,

          typeofroom: roomType, roomno: roomNumber, noofrooms: noOfRooms,

          noofpax: noOfPax, modeofarrival: modeOfArrival, trainno: trainNo, flightno: flightNo,

          roomrate: roomRate, discountamount: discountAmount, discountpercentage: discountPercentage,
          totalamountpaid: "",  finalamount: "",  gst: "",  modeofpayment: modeOfPayment, cardno: cardNo, upi: upi,

          mealplan: mealPlan, extrabedtype: "",

          travelagentname: travelAgentName, travelagentno: "",

          billingno: "",  regno: "",

          resassisname: resAssisName, specialreq: specialReq
      })

      return {success: true}     
    }catch(e){
      return {success: false, msg: e}
    }
  }


  const changeRoomBtnColor = (whichRoom) => {
    setRoomTypeBtnColor(whichRoom);
    setRoomType(whichRoom);
  };

  const changePaymentBtnColor = (paymentType) => {
    setPaymentTypeBtnColor(paymentType);
    setModeOfPayment(paymentType);
  };

  const changeMealBtnColor = (mealType) => {
    setMealTypeBtnColor(mealType);
    setMealPlan(mealType);
  };

  const handleInputChange = (e) => {
    if (e.target.name == "title") {  setGuestName({ ...guestName, title: e.target.value }); }
    else if (e.target.name == "firstname") {  setGuestName({ ...guestName, firstname: e.target.value }); }
    else if (e.target.name == "middlename") {  setGuestName({ ...guestName, middlename: e.target.value }); }
    else if (e.target.name == "lastname") {  setGuestName({ ...guestName, lastname: e.target.value }); }
    else if (e.target.name == "address") {  setAddress({ ...address, ad1: e.target.value }); }
    else if (e.target.name == "guestphonenumber") {  setGuestPhoneNumber(e.target.value); }
    else if (e.target.name == "companyname") {  setCompanyName(e.target.value); }
    else if (e.target.name == "designation") {  setDesignation(e.target.value); }
    else if (e.target.name == "bookingdate") {  setBookingDate(e.target.value); }
    else if (e.target.name == "arrivaldate") {  setArrivalDate(e.target.value); }
    else if (e.target.name == "arrivaltime") {  setArrivalTime(e.target.value); }
    else if (e.target.name == "departuredate") {  setdepartureDate(e.target.value); }
    else if (e.target.name == "departuretime") {  setDepartureTime(e.target.value); }
    else if (e.target.name == "roomnumber") {  setRoomNumber(e.target.value); }
    else if (e.target.name == "noofrooms") {  setNoOfRooms(e.target.value); }
    else if (e.target.name == "noofpax") {  setNoOfPax(e.target.value); }
    else if (e.target.name == "modeofarrival") {  setModeOfArrival(e.target.value); }
    else if (e.target.name == "trainno") {  setTrainNo(e.target.value); }
    else if (e.target.name == "flightno") {  setFlightNo(e.target.value); }
    else if (e.target.name == "roomrate") {  setRoomRate(e.target.value); }
    else if (e.target.name == "discountamount") {  setDiscountAmount(e.target.value); }
    else if (e.target.name == "discountpercentage") {  setDiscountPercentage(e.target.value); }
    else if (e.target.name == "cardno") {  setCardNo(e.target.value); }
    else if (e.target.name == "upi") {  setUpi(e.target.value); }
    else if (e.target.name == "travelagentname") {  setTravelAgentName(e.target.value); }
    else if (e.target.name == "resassisname") {  setResAssisName(e.target.value); }
    else if (e.target.name == "specialreq") {  setSpecialReq(e.target.value); }
  };

  const onSubmitAction = async (e) => {
    e.preventDefault();
    let res = await addReservationData();
    if(res.success){
      alert("Your form submitted!");
    }else{
      alert(res.msg);
    }
  };

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
          <form
            className="row g-3 bg-skyblue d-flex align-items-center justify-content-center mt-0 p-1"
            onSubmit={onSubmitAction}
          >
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Guest Name
              </label>
              <div className="col-sm-7 d-flex column-gap-1">
                <select
                  id="designation"
                  className="form-select w-50 height-30"
                  name="title"
                  value={guestName.title}
                  onChange={handleInputChange}
                  required
                >
                  <option value={""}> </option>
                  <option value={"Mr"}>Mr.</option>
                  <option value={"Master"}>Master</option>
                  <option value={"Miss"}>Miss</option>
                  <option value={"Mrs"}>Mrs.</option>
                </select>
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputName"
                  name="firstname"
                  value={guestName.firstname}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputName"
                  name="middlename"
                  value={guestName.middlename}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputName"
                  name="lastname"
                  value={guestName.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label
                htmlFor="guestphonenumber"
                className="col-sm-3 col-form-label"
              >
                Phone No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="number"
                  className="form-control height-30"
                  id="inputNumber"
                  name="guestphonenumber"
                  value={guestPhoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="address" className="col-sm-3 col-form-label">
                Address{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputAddress"
                  name="address"
                  value={address.ad1}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="companyname" className="col-sm-3 col-form-label">
                Company{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputCompany"
                  name="companyname"
                  value={companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="arrivaldate" className="col-sm-3 col-form-label">
                Arrival Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control height-30"
                  id="inputArrivalDate"
                  name="arrivaldate"
                  value={arrivalDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="designation"
                  className="col-sm-6 col-form-label"
                >
                  Designation{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputDesignation"
                    name="designation"
                    value={designation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="travelagentname"
                  className="col-sm-4 col-form-label"
                >
                  Travel Agent{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputTravelAgent"
                    name="travelagentname"
                    value={travelAgentName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label
                htmlFor="departuredate"
                className="col-sm-3 col-form-label"
              >
                Departure Date{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control height-30"
                  id="inputDepartureDate"
                  name="departuredate"
                  value={departureDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="arrivaltime" className="col-sm-3 col-form-label">
                Arrival Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control height-30"
                  id="inputArrivalTime"
                  name="arrivaltime"
                  value={arrivalTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="roomtype" className="col-sm-3 col-form-label">
                Type of Room{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className={`d-flex align-items-center justify-content-center text-light btn button-padding-5 height-30 large-button-width-60 large-button-font-size-12 ${
                    roomTypeBtnColor === "Standard"
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() => {
                    changeRoomBtnColor("Standard");
                  }}
                >
                  Standard
                </button>
                <button
                  type="button"
                  className={`d-flex align-items-center justify-content-center text-light btn button-padding-5 height-30 large-button-width-60 large-button-font-size-12 ${
                    roomTypeBtnColor === "Delux" ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => {
                    changeRoomBtnColor("Delux");
                  }}
                >
                  Delux
                </button>
                <button
                  type="button"
                  className={`d-flex align-items-center justify-content-center text-light btn button-padding-5 height-30 large-button-width-60 large-button-font-size-12 ${
                    roomTypeBtnColor === "Executive"
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() => {
                    changeRoomBtnColor("Executive");
                  }}
                >
                  Executive
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label
                htmlFor="departuretime"
                className="col-sm-3 col-form-label"
              >
                Departure Time{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="time"
                  className="form-control height-30"
                  id="inputDepartureTime"
                  name="departuretime"
                  value={departureTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="noofpax" className="col-sm-3 col-form-label">
                No of Pax{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputPax"
                  name="noofpax"
                  value={noOfPax}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="roomnumber" className="col-sm-6 col-form-label">
                  Room No{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputRoomNo"
                    name="roomnumber"
                    value={roomNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="noofrooms" className="col-sm-4 col-form-label">
                  No of Room{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control height-30"
                    id="inputNoOfRoom"
                    name="noofrooms"
                    value={noOfRooms}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label
                htmlFor="modeofarrival"
                className="col-sm-3 col-form-label"
              >
                Mode of Arrival{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputModeofArrival"
                  name="modeofarrival"
                  value={modeOfArrival}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="trainno" className="col-sm-3 col-form-label">
                Train No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputTrainNo"
                  name="trainno"
                  value={trainNo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="flightno" className="col-sm-3 col-form-label">
                Flight No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputFlightNo"
                  name="flightno"
                  value={flightNo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="roomrate" className="col-sm-3 col-form-label">
                Room Rate{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="number"
                  className="form-control height-30"
                  id="inputRoomRate"
                  name="roomrate"
                  value={roomRate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label
                htmlFor="modeofpayment"
                className="col-sm-3 col-form-label"
              >
                Mode of Payment{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-60 large-button-font-size-12 ${
                    paymentTypeBtnColor === "Cash"
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() => {
                    changePaymentBtnColor("Cash");
                  }}
                >
                  Cash
                </button>
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-60 large-button-font-size-12 ${
                    paymentTypeBtnColor === "Card"
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() => {
                    changePaymentBtnColor("Card");
                  }}
                >
                  Card
                </button>
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-60 large-button-font-size-12 ${
                    paymentTypeBtnColor === "UPI"
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() => {
                    changePaymentBtnColor("UPI");
                  }}
                >
                  UPI
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="discountamount"
                  className="col-sm-6 col-form-label"
                >
                  Discount amount{" "}
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control height-30"
                    id="inputRoomNo"
                    name="discountamount"
                    value={discountAmount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="discountpercentage"
                  className="col-sm-4 col-form-label"
                >
                  Discount %{" "}
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="form-control height-30"
                    id="inputNoOfRoom"
                    name="discountpercentage"
                    value={discountPercentage}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="cardno" className="col-sm-3 col-form-label">
                Card No{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="number"
                  className="form-control height-30"
                  id="inputCardNo"
                  name="cardno"
                  value={cardNo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="upi" className="col-sm-3 col-form-label">
                UPI{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control height-30"
                  id="inputupi"
                  name="upi"
                  value={upi}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="bookingdate" className="col-sm-3 col-form-label">
                Date of Booking{" "}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control height-30"
                  id="inputBookingDate"
                  name="bookingdate"
                  value={bookingDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rev-margin-gap">
              <label htmlFor="mealplan" className="col-sm-3 col-form-label">
                Meal Plan{" "}
              </label>
              <div className="col-sm-7 d-flex justify-content-between">
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-40 large-button-font-size-12 ${
                    mealTypeBtnColor === "EP" ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => {
                    changeMealBtnColor("EP");
                  }}
                >
                  EP
                </button>
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-40 large-button-font-size-12 ${
                    mealTypeBtnColor === "CP" ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => {
                    changeMealBtnColor("CP");
                  }}
                >
                  CP
                </button>
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-40 large-button-font-size-12 ${
                    mealTypeBtnColor === "AP" ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => {
                    changeMealBtnColor("AP");
                  }}
                >
                  AP
                </button>
                <button
                  type="button"
                  className={`w-70 height-30 d-flex align-items-center justify-content-center text-light btn button-padding-5 large-button-width-40 large-button-font-size-12 ${
                    mealTypeBtnColor === "MAP" ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => {
                    changeMealBtnColor("MAP");
                  }}
                >
                  MAP
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex rev-margin-gap">
              <label htmlFor="specialreq" className="col-sm-3 col-form-label">
                Special Request{" "}
              </label>
              <div className="col-sm-7">
                <textarea
                  className="form-control"
                  id="inputRequest"
                  rows="2"
                  name="specialreq"
                  value={specialReq}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column rev-margin-rev-margin-gap">
              <div className="col-12 d-flex align-items-center">
                <label
                  htmlFor="resassisname"
                  className="col-sm-3 col-form-label"
                >
                  Reservation Assistant Name{" "}
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control height-30"
                    id="inputReservationAssistantName"
                    name="resassisname"
                    value={resAssisName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <button
                  type="submit"
                  className="d-flex align-items-center justify-content-center text-light btn btn-primary height-30 button-padding-5"
                >
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
