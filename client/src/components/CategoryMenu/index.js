import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  //on page render, run fetch function
  useEffect(() => {
    fetchCategories();
  }, []);

  //axios get request to fetch all categories
  const fetchCategories = async () => {
    await axios({
      method: 'get',
      url: '/api/category'

    })
      //update the state with category data
      .then(function (response) {
        // console.log(response.data);
        setCategories(response.data);
      })
  };

  //map categories to cards
  return (
    <div>
      {categories.map(element => {
        return (
          <Link to='/api/product'>
            <h2>{element.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}


