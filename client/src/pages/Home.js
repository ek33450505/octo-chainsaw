import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
<<<<<<< HEAD
=======
import ProductList from '../components/ProductList/productlist.js';
import React, {useState} from 'react';
>>>>>>> b1f018541f4628df8748ca67181a87ceeaa1283e

const Home = () => {
    const [currentCategory, setCurrentCategory] = useState("")

    const handleCategoryChange = (category) => setCurrentCategory(category)
    
    return (
        <div>
            {/* <CategoryMenu /> */}
            {!currentCategory && <CategoryMenu handleCategoryChange = {handleCategoryChange}/>}
            {currentCategory && <ProductList currentCategory = {currentCategory}/>}
        </div>
    )
}


export default Home;