import React, { useState } from 'react';
import { createUser } from '../../utils/API';
import Auth from '../../utils/auth';

export default function Signup() {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', zip: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await createUser(userFormData);
    
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
    
          const { token, user } = await response.json();
          console.log(user);
          Auth.login(token);
        } catch (err) {
          console.error(err);
        }
    
        setUserFormData({
            username: '',
            email: '',
            password: '',
            zip: ''
        });
      };

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

                            <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4" onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="username" className="form-control" id="username" placeholder="Username" onChange={handleInputChange} value={userFormData.username} required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={handleInputChange} value={userFormData.email} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={handleInputChange} value={userFormData.password} required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="zip" id="zip" placeholder="Zip Code" onChange={handleInputChange} value={userFormData.zip} required />
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