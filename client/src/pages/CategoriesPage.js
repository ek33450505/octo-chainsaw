import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
import Nav from '../components/Nav/nav.js';
import Hero from '../components/Hero/hero.js';
import Footer from '../components/Footer/footer.js';

const CategoriesPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <CategoryMenu />
            <Footer />
        </div>
    )
}

export default CategoriesPage;