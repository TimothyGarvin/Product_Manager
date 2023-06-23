import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {remove} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/inventory/' +productId)
            .then(res => {remove(productId)})
            .catch(err => console.error(err))
    }
    return (
        <div>
            {props.product.map((product, i) =>
                <div key={i}>
                    <Link to={'/item/' + product._id}>
                    <h3>{product.title}, ${product.price/100}</h3>
                    <p>{product.description}</p>
                    </Link>
                    <button onClick ={(e)=>{deleteProduct(product._id)}}>
                        Remove From Inventory
                    </button>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default ProductList