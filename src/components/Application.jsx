import React from "react";
import { useState } from "react";
import "../CustomCss/Reservation.css";

const Application = () => {
    const [receiverName, setReceiverName] = useState("");
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");

    const handleInputChange = (e) => {
        if(e.target.name == "receivername"){ setReceiverName(e.target.value) }
        else if(e.target.name == "message"){ setMessage(e.target.value) }
        else if(e.target.name == "sendername"){ setSenderName(e.target.value) }
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
                            <h5 className="text-primary">Application</h5>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h3 className="pe-1 text-primary">To,</h3>
                        <input
                            type="text"
                            className="form-control background-gray h-30 width-280 small-width-180"
                            name="receivername" value={receiverName} onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-3">
                        <textarea className="form-control bg-skyblue w-75 height-400 margin-left-180" name="message" value={message} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-4 padding-right-50">
                        <div className="flex-column">
                            <h5 className="text-primary">Thankfully</h5>
                            <input
                                type="text"
                                className="form-control background-gray h-30 width-200 small-width-180"
                                placeholder="@username"
                                name="sendername" value={senderName} onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;
