import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <nav className="navbar sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <a className="text-primary" href="/#">
              <i className="bx bx-chevrons-left"></i>
            </a>
            <h5 className="text-primary">Home</h5>
          </div>
        </div>
      </nav>
      <div className="profile-box">
        <div className="row">
          <div className="col-sm">
            <i className="fa fa-user-o" aria-hidden="true" id="iconfix"></i>
            <br />
            <p className="mx-4" style={{ color: "rgba(71, 99, 253, 1)" }}>
              Edit Picture
            </p>
            <div className="profile-details">
              <p>
                <b>Name:</b> SIT HMCT
              </p>
              <p>
                <b>Username:</b> SITHMCT
              </p>
              <p>
                <b>Password:</b> ********
              </p>
            </div>
          </div>
          <div className="col-sm mt-5">
            <div className="profile-details">
              <p>
                <b>Email ID:</b> sithmctweb@gmail.com
              </p>
              <p>
                <b>Phone No:</b> 1234567890
              </p>
              <p>
                <b>Designation:</b> Manager
              </p>
              <p>
                <b>Use As:</b> Admin
              </p>
              <p>
                <b>User Since:</b> 2022
              </p>
              <p>
                <b>Shift:</b> Morning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
