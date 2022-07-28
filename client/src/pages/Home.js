import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
import ProductList from '../components/ProductList/productlist.js';

const Home = ({currentCategory, setCurrentCategory}) => {

    const handleCategoryChange = (category) => setCurrentCategory(category)
    
    return (
        <div>
            {!currentCategory && <CategoryMenu handleCategoryChange = {handleCategoryChange}/>} 
            {currentCategory && <ProductList currentCategory = {currentCategory} setCurrentCategory={setCurrentCategory}/>}
        </div>
    )
}


export default Home;