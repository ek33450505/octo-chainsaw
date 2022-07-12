import ProductList from '../components/ProductList/productlist';
import Nav from '../components/Nav/nav.js';
import Hero from '../components/Hero/hero.js';
import Footer from '../components/Footer/footer.js';



const ProductsPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <ProductList />
            <Footer />
        </div>
    )
}


export default ProductsPage;