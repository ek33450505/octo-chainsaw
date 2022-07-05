


export default function Nav() {

    function showNav() {
        //if user is logged in:
        if(0===1) {
            return (
                <ul>
                    <li>
                        Create Listing
                    </li>
                    <li>
                        Logout
                    </li>
                </ul>
            );
        } else {
            //if user is not logged in:
            return (
                <ul>
                    <li>
                        Signup
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            );
        }
    }
    
    return (
        <header>
            <h1>
                <span>😄 The RentIt App</span>
            </h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    )
}

