import { useState, useEffect } from "react";
import axios from 'axios';
// const axios = require('axios').default;


export default function MyAccount() {
    const [user, setUser] = useState([]);

    //on page render, run fetch function
    useEffect(() => {
        fetchUser();
    }, []);

    //axios get request to fetch all categories
    const fetchUser = async () => {
        await axios({
            method: 'get',
            url: '/api/user/:id'

        })
            //update the state with category data
            .then(function (response) {
                // console.log(response.data);
                setUser(response.data);
            })
    };


    return (
        <>
            <div>
             <section id="my-account" className="my-account">
               <div className="container">
                     <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                             <div className="content">
                                <h3>My Account</h3>
                                 <p>Here you can find information about your previous rentals, listings, and messages you've sent to other rentIt users.</p>
                             </div>
                         </div>
                        <div className="col-lg-8 d-flex align-items-stretch">
                             <div className="icon-boxes d-flex flex-column justify-content-center">
                                 <div className="row">
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-receipt"></i>
                                             <h4>Messages</h4>
                                             <p>Click the button below to be redirected to your messages.
                                             </p>
                                             <a href="#" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-cube-alt"></i>
                                             <h4>My Listings</h4>
                                             <p>Click the button below to be redirected to your previous listings.</p>
                                             <a href="#" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                     <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                                         <div className="icon-box mt-4 mt-xl-0">
                                             <i className="bx bx-images"></i>
                                             <h4>History</h4>
                                             <p>Click the button below to be redirected to your rentIt rental history.</p>
                                             <a href="#" className="more-btn"> Here <i className="bx"></i></a>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
            </div>
        </>
    )
}