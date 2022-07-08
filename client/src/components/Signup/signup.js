import React from "react";

export function Signup() {
    return (
        <div>
            <section id="signup" className="signup">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                                <h2>Sign Up</h2>
                                <p>Sign up to be eligible for rentIt services near you.</p>
                            </div>
                        </div>
  
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">

                            <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        {/* <input type="text" name="first-name" className="form-control" id="first-name" placeholder="Your First Name" required> */}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        {/* <input type="text" name="last-name" className="form-control" id="name" placeholder="Your Last Name" required> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        {/* <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required> */}
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        {/* <input type="tel" className="form-control" name="phone-number" id="phone-number" placeholder="Your Phone Number" required> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        {/* <input type="text" className="form-control" name="city" id="city" placeholder="Your City" required> */}
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        {/* <input type="date" className="form-control" name="dob" id="dob" placeholder="MM/DD/YYYY" required> */}
                                    </div>
                                </div>

                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                </div>
                                <div className="text-center"><button type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
  
                </div>
            </section>
        </div>
    )
};