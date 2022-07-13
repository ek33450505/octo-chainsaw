import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
import ProductList from '../components/ProductList/productlist.js';
import React, {useState} from 'react';

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