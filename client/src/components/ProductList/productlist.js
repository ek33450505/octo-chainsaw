import React from "react";
import { useState, useEffect } from "react";
import Calendar from "../Calender/calender"
import axios from 'axios';

export default function ProductList({currentCategory}) {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState("");
        //on page render, run fetch function
        useEffect(() => {
            fetchProducts();
    }, []);

    //axios get request to fetch all products
    const fetchProducts = async () => {
        await axios({
            method: 'get',
            url: '/api/product'

        })
            //update the state with category data
            .then(function (response) {
                console.log(response.data);
                setProducts(response.data);
         })
    };      

    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title text-center" data-aos="fade-left">
                        <h2>Products</h2>
                    </div>
                    {/* <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200"> */}
                    {products.filter(p=>currentCategory===p.category.name).map(product=>(
                        // <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        //     <div className="portfolio-wrap">
                        //         {/* <img src={product.image_url} className="img-fluid" alt=""></img> */}
                        //         <div className="portfolio-info">
                        //             <h4>{product.name}</h4>
                        //             <div className="portfolio-links">
                        //                 <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                        //                 <a title="More Details"><i className="bx bx-link"></i></a>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        <div>
                        <h4 onClick={()=> setCurrentProduct(product.id)}>{product.name}</h4> 
                        {currentProduct===product.id ? (
                            <div>
                                <h3>{product.description}</h3>
                                <Calendar currentState={product.state}/>
                            </div>
                        ) : null}
                        </div>
                    ))}

                    {/* </div> */}

                </div>
            </section>
        </div>
    )
};

