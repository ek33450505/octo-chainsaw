import React from "react";

export default function Nav() {

    function showNav() {
        //if user is logged in:
        if(0===1) {
            return (
                <div>
                    <header id="header" className="fixed-top d-flex align-items-center">
                        <div className="container">
                            <div className="header-container d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <h1 className="text-light"><a href="index.html"><span>rentIt</span></a></h1>
                                </div>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                        <li><a className="nav-link scrollto" href="#categories">Categories</a></li>
                                        <li><a className="nav-link scrollto" href="#account">Create Listing</a></li>
                                        <li><a className="nav-link scrollto " href="#portfolio">My Account</a></li>
                                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                                        <li><a className="getstarted scrollto" href="#login">Logout</a></li>
                                    </ul>
                                    <i className="bi bi-list mobile-nav-toggle"></i>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>
            );
        } else {
            //if user is not logged in:
            return (
                <div>
                    <header id="header" className="fixed-top d-flex align-items-center">
                        <div className="container">
                            <div className="header-container d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <h1 className="text-light"><a href="index.html"><span>rentIt</span></a></h1>
                                </div>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                        <li><a className="nav-link scrollto" href="#categories">Categories</a></li>
                                        <li><a className="nav-link scrollto" href="#account">Create Listing</a></li>
                                        <li><a className="nav-link scrollto " href="#portfolio">My Account</a></li>
                                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                                        <li><a className="nav-link scrollto" href="#sign-up">Sign Up</a></li>
                                        <li><a className="getstarted scrollto" href="#login">Login</a></li>
                                    </ul>
                                    <i className="bi bi-list mobile-nav-toggle"></i>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>
            );
        }
    }
    
    return (
        <nav>
            {showNav()}
        </nav>
    )
}