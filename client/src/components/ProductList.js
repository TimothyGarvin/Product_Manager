import React from 'react'
import axios from 'axios'

const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, i) =>
                <div key={i}>
                    <h3>{product.title}, ${product.price/100}</h3>
                    <p>{product.description}</p>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default ProductList