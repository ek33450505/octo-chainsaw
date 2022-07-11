import React from "react";


// export default function ProductList() {
//     const [categories, setCategories] = useState([]);

    //on page render, run fetch function
    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    // //axios get request to fetch all products
    // const fetchCategories = async () => {
    //     await axios({
    //         method: 'get',
    //         url: '/api/category'

    //     })
    //         //update the state with product data
    //     .then(function (response) {
    //         // console.log(response.data);
    //         setCategories(response.data);
    //     })
    // }
export default function GenerateProductList() {
    return (
        <>
            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title text-center" data-aos="fade-left">
                            <h2>Products</h2>
                        </div>

                        {categories.map(element => {
                            return (
                                <div className="row" data-aos="fade-up" data-aos-delay="200">
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
                </section>
            </div>
        </>
    )
}