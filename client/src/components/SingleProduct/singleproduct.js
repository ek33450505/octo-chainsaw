import React from "react";
import { Link } from "react-router-dom";


export default function SingleProduct() {
    //future: will query our database for the categories

    return (
        <section id="portfolio" class="portfolio">
            <div class="container">

                <div class="section-title text-center" data-aos="fade-left">
                <h2>Title</h2>
            </div>

            <div class="row" id="ultra-wide" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                    </div>
            </div>
            <div class="col-lg-8 col-md-6 item text-center">
                <p>Description</p>
                <div class="single-price">
                    <p>$0.00</p>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}