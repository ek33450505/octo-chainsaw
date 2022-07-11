import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function ProductList() {
    const [products, setProducts] = useState([]);

    //on page render, run fetch function
    useEffect(() => {
        fetchProducts();
    }, []);

    //axios get request to fetch all products
    const fetchProducts = async () => {
        await axios({
            method: 'get',
            url: '/api/product'

        })
            //update the state with product data
            .then(function (response) {
                // console.log(response.data);
                setProducts(response.data);
            })
    };

    //map products to page
    return (
        <div>
            {products.map(element => {
                return (
                    <>
                        <Link to='/api/product' key={element.id}>
                            <h4 key={element.id}>{element.name}</h4>
                        </Link>
                        <p>{ element.description }</p>
                        <p>{ element.state }</p>
                        <p>{ element.price }</p>
                    </>
                )
            })}
        </div>
    )
}



