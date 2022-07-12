import ProductList from '../components/ProductList/productlist.js';
import Nav from '../components/Nav/nav.js';
import Hero from '../components/Hero/hero.js';
import Footer from '../components/Footer/footer.js';
import GenerateProductList from '../components/ProductList/productlist.js';



const ProductsPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <GenerateProductList />
            <Footer />
        </div>
    )
}


export default ProductsPage;