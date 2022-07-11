import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function MyAccount() {
    const [user, setUser] = useState([]);

    // on page render, run fetch function
    useEffect(() => {
        fetchUser();
    }, []);

    // axios get request to fetch user
    const fetchUser = async () => {
        await axios({
            method: 'get',
            url: '/api/user'
        })

        // update the state with user data
        .then(function (response) {
            console.log(response.data);
            setUser(response.data);
        })
    };

    // map user info to page
    return (
        <div>
            {user.map(element => {
                return (
                    <>
                        <Link to='/api/user' key={element.id}>
                            <h4 key={element.id}>{element.name}</h4>
                        </Link>
                        <p>{ element.message }</p>
                        {/* <p>{ element.state }</p>
                        <p>{ element.price }</p> */}
                    </>
                )
            })}
        </div>
    )
}
