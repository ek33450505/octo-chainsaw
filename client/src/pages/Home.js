import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
import ProductList from '../components/ProductList/productlist.js';
import React, {useState} from 'react';

const Home = () => {
    const [currentCategory, setCurrentCategory] = useState("")

    return (
        <div>
            {/* <CategoryMenu /> */}
            {!currentCategory && <CategoryMenu setCurrentCategory = {setCurrentCategory}/>}
            {currentCategory && <ProductList currentCategory = {currentCategory}/>}
        </div>
    )
}


export default Home;