import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function MyListings() {
    const [listings, setListings] = useState([]);

    //on initial page render, run fetch function
    useEffect(() => {
        fetchListings();
    }, []);

    //axios get request to fetch all categories
    const fetchListings = async () => {
        await axios({
            method: 'get',
            url: '/api/product'

        })
            //update the state with category data
            .then(function (response) {
                console.log(response.data);
                setListings(response.data);
            })
    };

    return (
        listings.map(element => {
            return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    {/* <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-1.jpg?raw=true' className="img-fluid" alt=""></img> */}
                    <div className="portfolio-info">
                        <h4> {element.name} </h4>
                        <div className="portfolio-links">
                            <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                            <a title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            )
        })
    )
}