import React from 'react';
import "../CustomCss/Reservation.css";

const Notice = () => {
    return (
        <div>
            <div className='bg-light vh-100'>
                <nav class="navbar sticky-top navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <div class="navbar-brand d-flex align-items-center">
                            <a class="text-primary" href="/#">
                                <i class="bx bx-chevrons-left"></i>
                            </a>
                            <h5 class="text-primary">Notice</h5>
                        </div>
                    </div>
                </nav>
                <div class="container bg-skyblue border-radius-10 height-550 p-2">
                    <div class="d-flex align-items-center justify-content-center">
                        <h3 class="text-primary align-text-center">Notices</h3>
                    </div>
                    <div class="flex-column px-5">
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                        <div class="height-50 background-gray border-radius-10 mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notice