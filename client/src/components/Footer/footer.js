import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

export default function Footer() {
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
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto">
                                        Home
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto">
                                        Categories
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/product' className="nav-link scrollto">
                                        Product
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/contact' className="nav-link scrollto">
                                        Contact
                                    </Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Account</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/myaccount' className="nav-link scrollto">
                                        My Account
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/signup' className="nav-link scrollto">
                                        Signup
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/login' className="nav-link scrollto">
                                        Login
                                    </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to='/' className="nav-link scrollto onClick={Auth.logout}">
                                        Logout
                                    </Link></li>
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