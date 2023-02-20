import React from "react";
import homeimg from "../img/homeimg.png";
const Home = () => {
  return (
    <div className="container" id="HomeCss">
      <div className="row">
        <div className="col-sm" id="homeimgcss">
          <img src={homeimg} className="imgformfix" />
        </div>
        <div className="col-sm">
          <form className="formcss">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <h4>Role:</h4>
              </label>
              <br />
              <select name="roles" id="roles" className="selectcss">
                <option value="volvo">Admin</option>
                <option value="saab">Employee</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <h4>Username:</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <h4>
                <label for="exampleInputEmail1" className="form-label">
                  Password:
                </label>
              </h4>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <center>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
