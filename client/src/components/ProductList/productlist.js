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
                            {/* name of category goes here */}
                            <h2>Category-Name</h2>
                        </div>

                        {categories.map(element => {
                            return (
                                <div className="row" id="ultra-wide" data-aos="fade-up" data-aos-delay="200">
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            {/* image goes here */}
                                            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 item text-center">
                                        {/* listing info goes here */}
                                        <h2 className="listing-title">Title</h2>
                                        <p>Description</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
};