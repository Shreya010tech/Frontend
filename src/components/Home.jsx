import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../img/homeimg.png";
import Cookies from 'js-cookie'
import Localbase from "localbase";
let db = new Localbase("hmctdb");
db.config.debug = false;

const Home = () => {
  
  
  // Check :  Login into App
  // params : role(Admin/Employee),username,password                                          (Case Sensitive)
  // return :   1.  {success:true} + Set Cookie('isLoggedIn','name','username','role')        IF CORRECT Credentials
  //            2.  {success:false, msg: 'Invalid Credentials! Try Again!'}                   IF INCORRECT Credentials
  //            3.  {success:false, msg: 'Something Went Wrong!'}                             IF DB Error
  const LoginAction = async(role,username,password)=>{  
    try{
      LogoutAction();

      let user = await db.collection("users").doc({ role: role }).get();

      if(!user) return {success:false, msg: 'Something Went Wrong!' }

      if(user.role === role && user.username === username && user.password === password){
        Cookies.set('isLoggedIn', 'true', { expires: 0.5 });
        Cookies.set('name', `${user.name}`, { expires: 0.5 });
        Cookies.set('username', `${user.username}`, { expires: 0.5 });
        Cookies.set('role', `${user.role}`, { expires: 0.5 });
        return { success: true }
      }else{
        return {success: false, msg: 'Invalid Credentials! Try Again!'}
      }
    }catch(e){
      console.log("LoginPageError (loginAction) : ",e);
      return {success:false, msg: 'Something Went Wrong' }
    }
  }


  // Check :  Logout from App
  // params : none
  // return :   1.  {success:true} + Remove Cookie('isLoggedIn','name','username','role')     IF CORRECT Credentials
  //            2.  {success:false, msg: 'Something Went Wrong!'}                             IF DB Error
  const LogoutAction = ()=>{
    try{
      if(Cookies.get('isLoggedIn')) { Cookies.remove('isLoggedIn'); }
      if(Cookies.get('name')) { Cookies.remove('name'); }
      if(Cookies.get('username')) { Cookies.remove('username'); }
      if(Cookies.get('role')) { Cookies.remove('role'); }
      return {success:true}
    }catch(e){
      console.log("LoginPageError (logoutAction) : ",e);
      return {success:false, msg: 'Something Went Wrong' } 
    }
  }


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
              <NavLink to="/Home3">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </NavLink>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
