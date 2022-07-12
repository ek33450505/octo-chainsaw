export default function CategoryMenu() {
    //future: will query our database for the categories
    const categories = ['Outdoor Gear', 'Tools', 'Sports Equipment', 'Tech', 'Motorized Vehicles', 'Instruments', 'For Kids'];

    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title text-center" data-aos="fade-left">
                        <h2>Categories</h2>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app" id="col-height-mod">
                            <a href="./category/outdoor-gear">
                                <div className="portfolio-wrap">
                                    <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/outdoor-gear.jpeg?raw=true' className="img-fluid categories-img" alt=""></img>
                                    <div className="portfolio-info">
                                        <h4>Outdoor Gear</h4>
                                        <div className="portfolio-links">
                                            <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                            <a title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web" id="col-height-mod">
                            <a href="./category/tools">
                                <div className="portfolio-wrap">
                                <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/tools.jpg?raw=true' className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Tools</h4>
                                        <div className="portfolio-links">
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app" id="col-height-mod">
                            <a href="./category/sports-equipment">
                                <div className="portfolio-wrap">
                                    <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/sports-equipment.jpg?raw=true' className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Sports Equipment</h4>
                                        <div className="portfolio-links">
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card" id="col-height-mod">
                            <a href="./category/tech">
                                <div className="portfolio-wrap">
                                    <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/tech.jpg?raw=true' className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Tech</h4>
                                        <div className="portfolio-links">
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web" id="col-height-mod">
                            <a href="./category/motorized-vehicles">
                                <div className="portfolio-wrap">
                                    <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/motorized-vehicles.jpg?raw=true' className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Motorized Vehicles</h4>
                                        <div className="portfolio-links">
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app" id="col-height-mod">
                            <a href="./category/instruments">
                                <div className="portfolio-wrap">
                                    <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/instruments.jpg?raw=true' className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Instruments</h4>
                                        <div className="portfolio-links">
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
