import Nav from '../components/Nav/nav.js';
import Footer from '../components/Footer/footer.js';
import CreateListing from '../components/CreateListing/createlisting.js';
import Hero from '../components/Hero/hero.js';



const CreateListingPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <CreateListing />
            <Footer />
        </div>
    )
}

export default CreateListingPage;