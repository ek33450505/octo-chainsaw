import { useState, useEffect } from "react";
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
      { products.map(element => {
        return (
          <h4>{ element.name }</h4>
        )
      })}   
    </div>
  )
}



