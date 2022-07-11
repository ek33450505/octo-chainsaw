import React from "react";
import Auth from '../../utils/auth';

export default function Nav() {

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
                                <li><a className="nav-link scrollto" href="/category/">Categories</a></li>
                                {/* {if user is logged in, show create listing, my account, and logout links */}
                                {Auth.loggedIn() ? (
                                    <>
                                        <li><a className="nav-link scrollto" href="/product/">Create Listing</a></li>
                                        <li><a className="nav-link scrollto " href="/user/">My Account</a></li>
                                        <li><a className="getstarted scrollto" href="user/logout" onClick={Auth.logout}>Logout</a></li>
                                    </>
                                ) : (
                                    <>
                                        <li><a className="nav-link scrollto" href="/user/">Sign Up</a></li>
                                        <li><a className="getstarted scrollto" href="/user/login/">Login</a></li>
                                    </>
                                )}                                        
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}