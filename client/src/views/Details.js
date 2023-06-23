import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/inventory/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, []);

    return(
        <div>
            <h2>Product: {product.title}</h2>
            <h2>Price: ${product.price/100}</h2>
            <h2>Description:</h2>
            <p>{product.description}</p>
            <Link to={'/inventory/edit/' + product._id}>Update Details</Link>
        </div>
    )
}

export default Detail;
