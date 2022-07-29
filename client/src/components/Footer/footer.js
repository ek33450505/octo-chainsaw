import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

export default function Footer({ setCurrentCategory }) {

    const handleUpdateCategory = () => setCurrentCategory("")

    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>RentIt</h3>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto">
                                        Home
                                    </Link></li>
                                    <li onClick={handleUpdateCategory}><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto">
                                        Categories
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/productlist' className="nav-link scrollto">
                                        Products
                                    </Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>About Us</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/contact' className="nav-link scrollto">
                                        RentIt, Inc.
                                    </Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Account</h4>
                                <ul>
                                    {/* {if user is logged in, show create listing, my account, and logout links */}
                                    {Auth.loggedIn() ? (
                                        <>
                                            <li><i className="bx bx-chevron-right"></i> <Link to='/myaccount' className="nav-link scrollto">
                                                My Account
                                            </Link></li>
                                            <li><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto" onClick={Auth.logout}>
                                                Logout
                                            </Link></li>

                                        </>
                                    ) : (
                                        <>  
                                            <li><i className="bx bx-chevron-right"></i> <Link to='/login' className="nav-link scrollto">
                                                My Acccount
                                            </Link></li>                                                                             
                                            <li><i className="bx bx-chevron-right"></i> <Link to='/signup' className="nav-link scrollto">
                                                Signup
                                            </Link></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>RentIt</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
};