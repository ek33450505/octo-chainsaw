import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { addDays } from 'date-fns'




export default function Calender({currentState}) {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState(null)
    function onChangeDateHandler(dates) {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        console.log(start, end)
    }
        return (
        // <form>import React from "react";
                <div>
                    <section id="signup" className="signup">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-right">
                                    <div className="section-title">
                                        <h2>Select a date to rent</h2>
                                    </div>
                                </div>
          
                                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
        
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input type="date" className="form-control" name="dob" id="dob" placeholder="MM/DD/YYYY" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                            </div>
                                            <div className="text-center"><button type="submit">Submit</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
          
                        </div>
                    </section>
                </div>
            )
        };