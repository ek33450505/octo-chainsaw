import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from "../Calender/calender"
import axios from 'axios';

export default function ProductList({currentCategory}) {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState("");
        //on page render, run fetch function

        console(currentCategory);
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
                                <h3>{product.price}</h3>
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



// {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-2.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Tools</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-app">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-3.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Sports Equipment</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-card">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-4.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Tech</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-web">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-5.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Motorized Vehicles</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-app">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-6.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Instruments</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-card">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-7.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>For Kids</h4>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-card">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-8.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Card 3</h4>
//         <p>Card</p>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div>

// <div className="col-lg-4 col-md-6 portfolio-item filter-web">
// <div className="portfolio-wrap">
//     <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-9.jpg?raw=true' className="img-fluid" alt="" />
//     <div className="portfolio-info">
//         <h4>Web 3</h4>
//         <p>Web</p>
//         <div className="portfolio-links">
//             {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
//             <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//         </div>
//     </div>
// </div>
// </div> */}
