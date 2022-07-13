import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function MyListings() {
    const [listings, setListings] = useState([]);

    //on initial page render, run fetch function
    useEffect(() => {
        fetchListings();
    }, []);

    //axios get request to fetch all categories
    const fetchListings = async () => {
        await axios({
            method: 'get',
            url: '/api/product'

        })
            //update the state with category data
            .then(function (response) {
                console.log(response.data);
                setListings(response.data);
            })
    };

    return (
        listings.map(element => {
            return (
                <div>
                    <h2> {element.user_id} </h2>
                    <p> {element.name} </p>
                </div>

            )
        })
    )
}