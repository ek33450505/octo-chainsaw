import Nav from '../components/Nav/nav.js';
import Footer from '../components/Footer/footer.js';
import { useState } from 'react';
import Axios from 'axios'


const CreateListingPage = () => {
    const user = 1;
    const category = 1
    const [category_id, setCategoryId] = useState()
    const [user_id, setUserId] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [productImage, setProductImage] = useState('')
    const [fileName, setFileName] = useState('Choose File')
    const [state, setState] = useState('')
    const [price, setPrice] = useState('')
    const createProduct = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('category_id', 1)
        formData.append('user_id', 1)
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
            <Nav />
            <section>
                <br></br>
                <h2>Create a Listing</h2>
                <form >
                    <div>
                        <label htmlFor='category_id'>Please Select a Category</label>
                        <select
                            className='custom-select custom-select-lg'
                            id='category_id'
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value={category}>Outdoor Gear</option>
                            <option value='2'>Tools</option>
                            <option value='3'> Sports</option>
                            <option value='4'> Tech</option>
                            <option value='5'>Motorized Vehicles</option>
                            <option value='6'>instruments</option>
                            <option value='7'>For the kids</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='user_id'>User id</label>
                        <select
                            id='state'
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

                    <div>
                        <label htmlFor='name'>Product name</label>
                        <input
                            type='text'
                            className=''
                            id='name'

                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>
                    </div>

                    <div>
                        <label htmlFor='descr'>Product Description</label>
                        <textarea
                            maxLength='300'
                            rows='4'
                            cols='50'
                            className='descsription'
                            id='descr'

                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div>

                        <label htmlFor='productImage'>{fileName}</label>
                        <input
                            type='file'
                            className=''
                            id='file'

                            onChange={(e) => {
                                setProductImage(e.target.files[0]);
                                setFileName(e.target.files[0].name)
                            }}
                        ></input>
                    </div>
                    <div>
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


                    </div>
                    <div>
                        <label htmlFor='price'>Price Per Day</label>
                        <input
                            type='number'
                            min='1'
                            max='1000'
                            className=''
                            id='price'

                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </input>
                    </div>
                    <button type='button' className='btn btn-primary btn-lg' onClick={createProduct}></button>

                </form>
            </section>

            <Footer />

        </div>
    )
}

export default CreateListingPage;