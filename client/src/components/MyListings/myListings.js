import { useState, useEffect } from "react";
import axios from 'axios';



export default function MyListings(props) {
    const [listings, setListings] = useState([]);


    // axios get request to fetch all categories
    const fetchListings = async () => {
        await axios({
            method: 'get',
            url: `/api/user/${props.userId}`
        })
            //update the state with category data
            .then(function (response) {
                console.log(response.data);
                setListings(response.data.products);
            })
    };



    useEffect(() => {
        fetchListings();
    }, [props.userId]);



    return (
        <>

            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title text-center" data-aos="fade-left">
                            <h2>Your Products</h2>
                        </div>
                        <div className="items-container">

                            <div className="row portfolio-container flex-item" data-aos="fade-up" data-aos-delay="200">
                                {listings.map(element => {
                                    return (


                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src='https://images.freeimages.com/images/large-previews/c03/colour-math-function-1170167.jpg' className="img-fluid" alt=""></img>
                                                <div className="portfolio-info">
                                                    <h4>{element.name}</h4>
                                                    <div className="portfolio-links">
                                                        {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a> */}
                                                        <p>{element.description}</p>
                                                        <p>Rental Price: ${element.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}