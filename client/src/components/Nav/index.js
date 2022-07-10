import { Link } from "react-router-dom";


export default function Nav() {

    function showNav() {
        //future: place authentication functions
        if(0===0) {
            return (
                <ul>
                    <Link to='/api/category'>
                        Categories
                    </Link>
                    <Link to='/'>
                        Create Listing
                    </Link>
                    <Link to='/'>
                        Logout
                    </Link>
                </ul>
            );
        } else {
            //if user is not logged in:
            return (
                <ul>
                     <Link to='/api/category'>
                        Categories
                    </Link>
                    <Link to='/'>
                        Login
                    </Link>
                    <Link to='/'>
                        Signup
                    </Link>
                </ul>
            );
        }
    }
    
    return (
        <header>
            <h1>
                <Link to='/'><span>😄 The RentIt App</span></Link>
            </h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    )
}

