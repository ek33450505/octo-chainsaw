import React from "react";

export function Footer() {
    return (
        <div>
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>rentIt</h3>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Categories</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Create Listing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Account</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">My Account</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Signup</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Login</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>rentIt</span></strong>. All Rights Reserved
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
};