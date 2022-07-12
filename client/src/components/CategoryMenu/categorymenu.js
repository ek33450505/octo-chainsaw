import { useState, useEffect } from "react";
import axios from 'axios';
// const axios = require('axios').default;


export default function CategoryMenu({setCurrentCategory}) {
    const [categories, setCategories] = useState([]);

        //on page render, run fetch function
        useEffect(() => {
            fetchCategories();
    }, []);

    //axios get request to fetch all categories
    const fetchCategories = async () => {
        await axios({
            method: 'get',
            url: '/api/category'

        })
            //update the state with category data
            .then(function (response) {
                // console.log(response.data);
                setCategories(response.data);
         })
    };      

    //map categories to cards
    return (
        <>

            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title text-center" data-aos="fade-left">
                            <h2>Categories</h2>
                        </div>
                        <div className="items-container"> 
                            {categories.map(element => {
                                return (
                                    <div onClick={()=>setCurrentCategory(element.name)} className="row flex-item" data-aos="fade-up" data-aos-delay="200">

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-1.jpg?raw=true' className="img-fluid" alt=""></img>
                                                <div className="portfolio-info">
                                                    <h4>{element.name}</h4>
                                                    <div className="portfolio-links">
                                                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                                        <a title="More Details"><i className="bx bx-link"></i></a>
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





// export default function CategoryMenu() {
//     //future: will query our database for the categories
//     const categories = ['Outdoor Gear', 'Tools', 'Sports Equipment', 'Tech', 'Motorized Vehicles', 'Instruments', 'For Kids'];

//     return (
//         <div>
//             <section id="portfolio" className="portfolio">
//                 <div className="container">

//                     <div className="section-title text-center" data-aos="fade-left">
//                         <h2>Categories</h2>
//                     </div>

//                     <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-1.jpg?raw=true' className="img-fluid" alt=""></img>
//                                 <div className="portfolio-info">
//                                     <h4>Outdoor Gear</h4>
//                                     <div className="portfolio-links">
//                                         <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
//                                         <a title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-2.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Tools</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-3.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Sports Equipment</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-4.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Tech</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-5.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Motorized Vehicles</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-6.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Instruments</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-7.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>For Kids</h4>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-8.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Card 3</h4>
//                                     <p>Card</p>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                             <div className="portfolio-wrap">
//                                 <img src='https://github.com/ek33450505/octo-chainsaw/blob/feature/pages/client/src/assets/img/categories/portfolio-9.jpg?raw=true' className="img-fluid" alt="" />
//                                 <div className="portfolio-info">
//                                     <h4>Web 3</h4>
//                                     <p>Web</p>
//                                     <div className="portfolio-links">
//                                         {/* <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
//                                         <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </div>
//     )

//     // <h2>Categories</h2>
//     // {categories.map((item) => (
//     //     <button>
//     //         {item}
//     //     </button>
//     // ))}
// }
