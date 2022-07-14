import { useState, useEffect } from 'react';
import Axios from 'axios'
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function CreateProduct() {
    const [category_id, setCategoryId] = useState()
    const [user_id, setUserId] = useState({});
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [productImage, setProductImage] = useState('')
    const [state, setState] = useState('')
    const [price, setPrice] = useState('')
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const user = Auth.getProfile()

                setUserId(user.data.id);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, []);


    useEffect(() => {
        fetchCategories();
    }, []);

    //axios get request to fetch all categories
    const fetchCategories = async () => {
        await Axios({
            method: 'get',
            url: '/api/category'

        })
            //update the state with category data
            .then(function (response) {
                setCategories(response.data);
            })
    };

    const createProduct = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('category_id', category_id)
        formData.append('user_id', user_id)
        formData.append('name', name)
        formData.append('description', description)
        formData.append('productImage', productImage)
        formData.append('state', state)
        formData.append('price', price)
        try {
            Axios.post('http://localhost:3001/api/product/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }


    return (

        <div>
            <section id="signup" className='signup added-border-top'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                                <h2>Create a listing</h2>
                                <p>Create a listing to be rented by other rentIt users.</p>
                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">

                            <form className='php-email-form mt-4'>
                                <div className='row'>
                                    <div className="col-md-6 form-group">
                                        <label className='form-label' htmlFor='category_id'>Please Select a Category/</label>
                                        <select
                                            defaultValue='Please Select a Category'
                                            className='form-control'
                                            id='category_id'
                                            onBlur={(e) => setCategoryId(parseInt(e.target.value))}

                                        >
                                            <option disabled>Please Select a Category</option>
                                            {categories.map(element => {

                                                return (<option key={element.id} value={element.id}>{element.name}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className='form-label' htmlFor='name'>Product name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='name'
                                            required

                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12">
                                        <label className='form-label' htmlFor='description'>Product Description</label>
                                        <textarea
                                            maxLength='300'
                                            rows='4'
                                            cols='48'
                                            className='form-control'
                                            id='descr'
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-md-6 form-group">

                                        <label className='form-label' htmlFor='productImage'></label>
                                        <input
                                            type='file'
                                            className='form-control'
                                            id='file'

                                            onChange={(e) => {
                                                setProductImage(e.target.files[0]);
                                            }}
                                        ></input>
                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-md-6 form-group">
                                        <label className='fomr-label' htmlFor='price'>Price Per Day</label>
                                        <input
                                            type='number'
                                            min='1'
                                            max='1000'
                                            step='1'
                                            className='form-control'
                                            id='price'

                                            onChange={(e) => setPrice(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor='state' id="add-margin-top">Product Availability</label>
                                        <select

                                            defaultValue='Choose your Product Availability'
                                            id='state'
                                            onBlur={(e) => setState(e.target.value)}
                                            required
                                        >
                                            <option disabled>Choose your Product Availability</option>
                                            <option value='available'>Available</option>
                                            <option value='not_available'>Not Available</option>
                                            <option value='renting'> Renting</option>
                                            <option value='requested'> Requested</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row center-button'>
                                    <div className="col-md-6 form-group">
                                         <button type='button' className='rentit-button' onClick={createProduct}><Link to='/mylistings' >rentIt </Link>   <i className="bi bi-arrow-right"></i></button> 
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
;