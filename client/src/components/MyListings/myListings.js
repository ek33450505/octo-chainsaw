import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';


export default function MyListings() {
    const [userId, setUserId] = useState({});
    const [listings, setListings] = useState([]);

    useEffect(() => {
        getUserData();
        
    }, []);

    //obtain user id from JWT
    const getUserData = async () => {
        try {
            //use Auth obj to retrieve token from storage and set to variable 'token'
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
            }
        
        //retrieve user id saved in token (user id)
        const user = Auth.getProfile();
            // console.log(user.data.id);
            setUserId(user.data.id);
            // fetchListings(userId);
            
            } catch (err) {
                console.error(err);
            }
        };


        useEffect(() => {
            fetchListings(userId);
        }, [])

    //axios get request to fetch all categories
    const fetchListings = async () => {
        await axios({
            method: 'get',
            url: `/api/user/${userId}`
        })
            //update the state with category data
            .then(function (response) {
                console.log(response.data);
                setListings(response.data.products);
            })
    };

   


    return (
<>

<div>
    <section id="portfolio" className="portfolio">
        <div className="container">

            <div className="section-title text-center" data-aos="fade-left">
                <h2>Categories</h2>
            </div>
            <div className="items-container"> 
                {listings.map(element => {
                    return (
                        <div className="row portfolio-container flex-item" data-aos="fade-up" data-aos-delay="200">

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
                        </div>
                    )
                })}
            </div>

        </div>
    </section>
</div>
</>
    )
}