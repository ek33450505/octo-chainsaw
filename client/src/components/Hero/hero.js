import React from "react";

export default function Hero() {
    //future: will query our database for the categories

    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
                    <h1>Make renting simple with RentIt</h1>
                </div>
            </section>
        </div>
    )
};