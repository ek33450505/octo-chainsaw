import React from 'react';
import { useState, useEffect } from 'react';
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

    //map products to cards
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">
    
                    <div className="section-title text-center" data-aos="fade-left">
                        <h2>Products</h2>
                    </div>
                    {/* <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200"> */}
                    {currentCategory?(
                        products.filter(p=>currentCategory===p.category.name).map(product=>(
                            <div>
                            <h4 onClick={()=> setCurrentProduct(product.id)}>{product.name}</h4> 
                            {currentProduct===product.id ? (
                                <div>
                                    <h3>{product.description}</h3>
                                    <h3>{product.price}</h3>
                                    <h4>{product.state}</h4>
                                    <Calendar currentState={product.state}/>
                                </div>
                            ) : null}
                            </div>
                        ))
                    ):(
                        products.map(product=>(
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
                        ))
                    )
    
                        
                    }
    
                    {/* </div> */}
    
                </div>
            </section>
        </div>
    )
    };
    