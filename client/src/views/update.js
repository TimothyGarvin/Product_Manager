import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    // console.log(id)
    useEffect(() => {
        axios.get('http://localhost:8000/api/inventory/' +id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/inventory/' +id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>Update Product Information</h1>
            <form onSubmit={updateProduct}>
            <div>
                    <label>Update Title: </label>
                    <input type='text' name='title' onChange= {(e) => setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label>Update Price : ¢ </label>
                    <input type='number' name='price' onChange= {(e) => setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label>Update Description: </label>
                    <input type='text' name='description' onChange= {(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Update;