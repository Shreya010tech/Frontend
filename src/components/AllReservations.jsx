/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../CustomCss/Reservation.css";

const AllReservations = () => {
  return (
    <div>
      <div className="bg-light vh-100">
        <nav class="navbar sticky-top navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <a class="text-primary" href="/#">
                <i class="bx bx-chevrons-left"></i>
              </a>
              <h5 className="text-primary">Reservation</h5>
            </div>
          </div>
        </nav>
        <div class="container mb-5">
          <div class="d-flex justify-content-end column-gap-3">
            <button
              type="button"
              class="d-flex align-items-center text-primary btn btn-light"
            >
              <i class="bx bxs-building"></i>Reservation
            </button>
            <button
              type="button"
              class="d-flex align-items-center text-primary btn btn-light"
            >
              <i class="bx bxs-plus-square"></i>Add
            </button>
            <button
              type="button"
              class="d-flex align-items-center text-primary btn btn-light"
            >
              <i class="bx bxs-x-circle"></i>Cancel
            </button>
          </div>
          <table class="table table-borderless text-primary bg-skyblue mt-4">
            <thead>
              <tr>
                <th scope="col">Sl</th>
                <th scope="col">Date</th>
                <th scope="col">Booking ID</th>
                <th scope="col">Guest Name</th>
                <th scope="col">Booked Date</th>
                <th scope="col">Departure Date</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>fat</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllReservations;
