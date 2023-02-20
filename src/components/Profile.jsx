import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile-box">
        <div className="row">
          <div className="col-sm">
            <i className="fa fa-user-o" aria-hidden="true" id="iconfix"></i>
            <br />
            <p className="mx-4" style={{ color: "rgba(71, 99, 253, 1)" }}>
              Edit Picture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
