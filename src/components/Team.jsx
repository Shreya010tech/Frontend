import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";

const Team = () => {
  return(
    <>
      <div className="bg-light vh-100">
        <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <NavLink className="text-primary" to="/Home3">
                <i className="bx bx-chevrons-left font-size-25"></i>
              </NavLink>
              <h5 className="text-primary">Team</h5>
            </div>
          </div>
        </nav>
        <div className="container mb-1">
          <h4 className="text-center text-primary">This Web Application has been created by department  of Computer Science and Engineering batch 2024 for Hotel Management Department of Siliguri Institute of Technology.</h4>
          <br/>
          <h5>Here are Team of CSE department of Siliguri Institute of Technology :</h5>
          <br/>
          <h6 className="text-primary">UI/UX team :</h6>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, optio!</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">Dolor corporis laudantium cum sint molestiae consectetur voluptatum distinctio eum!</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">Magnam error, ratione dicta aliquid labore explicabo harum id cum!</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">Accusamus dolores, quos adipisci asperiores praesentium expedita illum animi? Sint.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;