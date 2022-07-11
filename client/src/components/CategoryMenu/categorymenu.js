import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


export default function CategoryMenu() {
    const [categories, setCategories] = useState([]);

    //on initial page render, run fetch function
    useEffect(() => {
        fetchCategories();
    }, []);

    //axios get request to fetch all categories
    const fetchCategories = async () => {
        await axios({
            method: 'get',
            url: '/api/category'

        })
            //update the state with category data
            .then(function (response) {
                // console.log(response.data);
                setCategories(response.data);
            })
    };

    //map categories to cards
    return (
        <>

            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title text-center" data-aos="fade-left">
                            <h2>Categories</h2>
                        </div>

                        {categories.map(element => {
                            return (
                                <div className="row" data-aos="fade-up" data-aos-delay="200">

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-1.jpg?raw=true' className="img-fluid" alt=""></img>
                                            <div className="portfolio-info">
                                                <Link to='/api/product' key={element.id}>
                                                    <h4>{element.name}</h4>
                                                </Link>
                                                <div className="portfolio-links">
                                                    <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                                    <a title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </section>
            </div>
        </>
    )
}
