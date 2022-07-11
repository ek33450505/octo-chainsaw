import React, { useState } from 'react';
import { newListing } from '../../utils/API';
import Auth from '../../utils/auth';

export default function CreateListing() {
    const [userFormData, setUserFormData] = useState({ category_id: '', name: '', description: '', price: '' });

    //this line needs to be fixed, also API.js with newListing() function
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await newListing(userFormData);
    
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
            category_id: '',
            name: '',
            description: '',
            price: ''
        });
    };

    return (
        <div>
            <section id="signup" className="signup added-border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                                <h2>Create a listing</h2>
                                <p>Create a listing to be rented by other rentIt users.</p>
                            </div>
                        </div>
  
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">

                            <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4" onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="username" className="form-control" id="username" placeholder="Username" onChange={handleInputChange} value={userFormData.category_id} required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={handleInputChange} value={userFormData.name} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={handleInputChange} value={userFormData.description} required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="zip" id="zip" placeholder="Zip Code" onChange={handleInputChange} value={userFormData.price} required />
                                    </div>
                                </div>
                                <div className="col-md-12 form-group mt-3 mt-md-0">
                                    {/* button may need to be fixed, disabled changed to enabled */}
                                    <div className="text-center"><button enabled={!(userFormData.category_id && userFormData.name && userFormData.description && userFormData.price)} type="submit">Submit</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};