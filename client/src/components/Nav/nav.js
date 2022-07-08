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
                                    {/* <h1 className="text-light"><a href="index.html"><span>RentIt</span></a></h1> */}
                                    <a class="navbar-brand" href="/"><img id="header-img" src="/images/logo_white_background.jpg" class="d-inline-block align-top" alt="logo"/></a>
                                </div>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                        <li><a className="nav-link scrollto" href="/category/">Categories</a></li>
                                        <li><a className="nav-link scrollto" href="/product/">Create Listing</a></li>
                                        <li><a className="nav-link scrollto " href="/user/">My Account</a></li>
                                        <li><a className="nav-link scrollto" href="/">Contact</a></li>
                                        <li><a className="getstarted scrollto" href="/user/logout">Logout</a></li>
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
                                    {/* <h1 className="text-light"><a href="index.html"><span>RentIt</span></a></h1> */}
                                    <a class="navbar-brand" href="/"><img id="header-img" src="/images/logo_white_background.jpg" class="d-inline-block align-top" alt="logo"/></a>

                                </div>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                    <li><a className="nav-link scrollto" href="/category/">Categories</a></li>
                                        <li><a className="nav-link scrollto" href="/product/">Create Listing</a></li>
                                        <li><a className="nav-link scrollto " href="/user/">My Account</a></li>
                                        {/* <li><a className="nav-link scrollto" href="/">Contact</a></li> */}
                                        <li><a className="nav-link scrollto" href="/user/">Sign Up</a></li>
                                        <li><a className="getstarted scrollto" href="/user/login/">Login</a></li>
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