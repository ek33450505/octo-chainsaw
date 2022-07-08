import CategoryMenu from '../components/CategoryMenu/categorymenu.js';
import Nav from '../components/Nav/nav.js';
import Hero from '../components/Hero/hero.js';
import Footer from '../components/Footer/footer.js';



const Home = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <CategoryMenu />
            <Footer />
        </div>
    )
}


export default Home;