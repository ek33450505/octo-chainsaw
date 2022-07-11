import { useState, useEffect } from 'react';
import Axios from 'axios'



export default function CreateProduct() {
    const user = 1;
    const [category_id, setCategoryId] = useState()
    const [user_id, setUserId] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [productImage, setProductImage] = useState('')
    const [fileName, setFileName] = useState('Choose File')
    // const [state, setState] = useState('')
    const [price, setPrice] = useState('')
    const [categories, setCategories] = useState([])


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
                // console.log(response.data);
                setCategories(response.data);
            })
    };

    const createProduct = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('category_id', category_id)
        formData.append('user_id', 1)
        formData.append('name', name)
        formData.append('description', description)
        formData.append('productImage', productImage)
        // formData.append('state', state)
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
            <section className='signup added-border-top'>
                <br></br>
                <h2>Create a Listing</h2>
                <form className='container'>
                    <div className='row form-group'>
                        <label htmlFor='category_id'>Please Select a Category/</label>
                        <select
                            className='form-control'
                            id='category_id'
                            onChange={(e) => setCategoryId(parseInt(e.target.value))}
                        >
                            {categories.map(element => {
                                return (<option key={element.id} value={element.id}>{element.name}</option>)
                            })}
                        </select>
                    </div>
                    <div className='row form-group'>
                        <label htmlFor='user_id'>User id/</label>
                        <select
                            className='form-control'
                            id='user_id'
                            onChange={(e) => setUserId(e.target.value)}
                        >
                            <option value={user}>User 1</option>
                            <option value='2'>User 2</option>
                            <option value='3'>User 3</option>
                            <option value='4'>User 4</option>
                            <option value='5'>User 5</option>
                            <option value='6'>User 6</option>

                        </select>
                    </div>

                    <div className='row form-group'>
                        <label htmlFor='name'>Product name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'

                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className='row form-group'>
                        <label htmlFor='description'>Product Description</label>
                        <textarea
                            maxLength='300'
                            rows='4'
                            cols='50'
                            className='form-control'
                            id='descr'

                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='row form-group'>

                        <label className='form-label' htmlFor='productImage'></label>
                        <input
                            type='file'
                            className='form-control'
                            id='file'

                            onChange={(e) => {
                                setProductImage(e.target.files[0]);
                                setFileName(e.target.files[0].name)
                            }}
                        ></input>
                    </div>
                    {/* <div>
                        <label htmlFor='state'>Product Availability</label>
                        <select
                            id='state'
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value='available'>Available</option>
                            <option value='not_available'>Not Available</option>
                            <option value='renting'> Renting</option>
                            <option value='requested'> Requested</option>
                        </select>


                    </div> */}
                    <div className='row '>
                        <div className='form-group'>
                            <label htmlFor='price'>Price Per Day</label>
                            <input
                                type='range'
                                min='1'
                                max='1000'
                                className='form-control-range'
                                id='price'

                                onChange={(e) => setPrice(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                    <div>
                        <button type='button' className='' onClick={createProduct}></button>
                    </div>

                </form>
            </section>
        </div>
    )
}
;