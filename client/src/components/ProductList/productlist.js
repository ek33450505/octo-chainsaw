import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from "../Calendar/calendar";
import Popup from '../Popup/Popup';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ProductList({ currentCategory, setCurrentCategory }) {
    const [products, setProducts] = useState([]);
    const [currentProductId, setCurrentProductId] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
    const allProducts = products.filter(p => currentCategory === p.category.name);

    //on page render, run fetch function

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleUpdateCategory = (category) => setCurrentCategory("")

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

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path); }

    //return a single product with a popup
    const renderProduct = (product) => {
        if (currentProductId === product.id) {
            return (
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <img src='https://images.freeimages.com/images/large-previews/c03/colour-math-function-1170167.jpg' className="img-fluid" alt=""></img>
                    <div className='popup-body'>
                        <h3>{product.name}</h3>
                        <h4>{product.description}</h4>
                        <h4>$ {product.price}</h4>
                    </div>
                    <p className='popup-status'>Status: {product.state}</p>

                    <div className="col-md-3 form-group">
                        <p><Calendar currentState={product.state} /></p>
                        <button type='button' className='rentit-button2' onClick={routeChange}> Rent </button>
                    </div>
                </Popup>
            )
        }
    }

    //render all products from a category
    const renderProducts = () => {

        return allProducts.map(product => {
            return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                        {/* <img src={require(`../../../../server/${element.image_url}`)} className="img-fluid" alt=""></img> */}
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
                                        {/* <button type='button' className='rentit-button1' onClick={() => window.location.reload()}> Rent 1 </button> */}
                                        <button type='button' className='rentit-button1' onClick={handleUpdateCategory}> Rent 1 </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    //set product id and popup the product
    const setProduct = (product) => {
        setCurrentProductId(product.id);
        setButtonPopup(true);
    }

    // display the content on the page
    const renderContent = () => {
        if (currentCategory != null && currentCategory !== "") {
            return renderProducts();
        } else {
            return (
                products.map(product => (
                    <div>
                        <div>
                            <h4 className='product-selected' onClick={() => setProduct(product)}>{product.name}</h4>
                            {renderProduct(product)}
                        </div>
                    </div>
                ))
            )
        }
    }

    //map products to cards
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title text-center" data-aos="fade-left">
                        <h2>Products</h2>
                    </div>
                    <div className="items-container">
                        <div className="row portfolio-container flex-item" data-aos="fade-up" data-aos-delay="200">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

