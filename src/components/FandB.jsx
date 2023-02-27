import React from "react";

const FandB = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <a className="text-primary" href="/Home3">
              <i className="bx bx-chevrons-left font-size-25"></i>
            </a>
            <h5 className="text-primary">F & B Services</h5>
            <div id="alignright">
              <button
                type="button"
                className="d-flex align-items-center text-primary btn btn-light button-padding-5"
              >
                <i class="fa fa-cart-plus" aria-hidden="true" id="iconfb"></i>
              </button>
              <button
                type="button"
                className="d-flex align-items-center text-primary btn btn-light button-padding-5"
              >
                <i className="bx bxs-x-circle" id="iconfb"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div id="fbcontentbox">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <p>content</p>
                </div>
                <div className="col-sm">
                    Form Here
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FandB;
