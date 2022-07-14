import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from "../Calender/calender";
import Popup from '../Popup/Popup';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ProductList({ currentCategory }) {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
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
                setProducts(response.data);
            })
    };

    //map products to cards
    return (
        <>
            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title text-center" data-aos="fade-left">
                            <h2>Products</h2>
                        </div>
                        <div className="items-container">
                            <div className="row portfolio-container flex-item" data-aos="fade-up" data-aos-delay="200">



                                {currentCategory ? (
                                    products.filter(p => currentCategory === p.category.name).map(product => (

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src='https://images.freeimages.com/images/large-previews/c03/colour-math-function-1170167.jpg' className="img-fluid" alt=""></img>
                                                {/* console.log(product.image_url) */}
                                                {/* <img src=("../../assets/img/categories/portfolio-1.png") className="img-fluid" alt=""></img> */}
                                                {/* <img src={require(`../../../../server/${element.image_url}`)} className="img-fluid" alt=""></img> */}
                                                <div className="portfolio-info">
                                                    <h4>{product.name}</h4>
                                                    <div className="portfolio-links">
                                                        {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a> */}
                                                        <p>{product.description}</p>
                                                        <p>Rental Price: ${product.price}</p>
                                                        <p>Status: {product.state}</p>
                                                        <p><Calendar currentState={product.state} /></p>
                                                        <div className='row right-button'>
                                                            <div className="col-md-3 form-group">
                                                                {/* <button type='button' className='rentit-button1' onClick={()=> setCurrentProduct(product.id)}><Link to='/'>Rent</Link>   </button> */}
                                                                <button type='button' className='rentit-button1' onClick={() => window.location.reload()}> Rent </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    products.map(product => (
                                        <div>
                                            <div>
                                                {/* <h4 onClick={() => setCurrentProduct(product.id)}>{product.name}</h4> */}
                                                <h4 onClick={() => setCurrentProduct(product.id)}>{product.name}</h4>
                                            </div>

                                            {currentProduct === product.id ? (
                                                <div className='product-details'>
                                                    <h4 onClick={() => setButtonPopup(true)}>{product.name}</h4>
                                                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                                        <img src='https://images.freeimages.com/images/large-previews/c03/colour-math-function-1170167.jpg' className="img-fluid" alt=""></img>
                                                        <h3>{product.name}</h3>
                                                        <h3>{product.description}</h3>
                                                        <h3>{product.price}</h3>
                                                        <p>Status: {product.state}</p>

                                                        <div className="col-md-3 form-group">
                                                            <p><Calendar currentState={product.state} /></p>
                                                            <button type='button' className='rentit-button2' onClick={() => window.location.reload()}> Rent </button>
                                                        </div>
                                                    </Popup>
                                                </div>
                                            ) : null}
                                        </div>
                                    ))
                                )
                                }



                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}



// <div>
// <h4 onClick={() => setCurrentProduct(product.id)}>{product.name}</h4>
// {currentProduct === product.id ? (
//     <div>
//         <h3>{product.description}</h3>
//         <h3>{product.price}</h3>
//         <h4>{product.state}</h4>
//         <Calendar currentState={product.state} />
//     </div>
// ) : null}
// </div>
