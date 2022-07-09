import React from "react";

export default function Login() {
    return (
        <div>
            <section id="login" className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                                <div className="row">
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="username" id="username" placeholder="Username" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
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