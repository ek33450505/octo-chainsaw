import { useState, useEffect } from 'react';
import axios from 'axios';


export default function GenerateProductList() {

    const [products, setProducts] = useState([]);

    // on page render, run fetch function
    useEffect(() => {
        fetchProducts();
    }, []);

    //axios get request to fetch all products
    const fetchProducts = async () => {
        await axios({
            method: 'get',
            url: '/api/product'

        })
            //update the state with product data
            .then(function (response) {
                // console.log(response.data);
                setProducts(response.data);
            })
    }

    return(

        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title text-center" data-aos="fade-left">
                        <h2>Products</h2>
                    </div>
                    
                    {products.map(element => {
                        return(
                            <div className="row" data-aos="fade-up" data-aos-delay="200">
                                {/* add route to post id */}
                                <Link to="">
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-1.jpg?raw=true' className="img-fluid" alt=""></img>
                                            <div className="portfolio-info">
                                                <h4 className="listing-title">{element.name}</h4>
                                                <div className="portfolio-links">
                                                    <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                                    <a title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}