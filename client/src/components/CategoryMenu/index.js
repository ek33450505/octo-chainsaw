import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function CategoryMenu() {

  const [categories, setCategories] = useState([]);
  const [categoryPick, setCategoryPick] = useState([]);


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

  //on category selection, setCategoryPick to innertext
  let categorySelected = (e) => {
    console.log(e.target.innerText);
    setCategoryPick(e.target.innerText)
  }

  //map categories to cards
  return (
    <div>
      {categories.map(element => {
        return (
          <>
          <Link to='/api/product' onClick={categorySelected} key={element.id}>
            <h2>{element.name}</h2>
          </Link>
           <p> { element.description }</p>
           </>
        )
      })}
    </div>
  )
}


