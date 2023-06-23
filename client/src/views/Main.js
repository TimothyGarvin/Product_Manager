import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/inventory")
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
        },[]);

        const deleteProduct = productId => {
            setProduct(product.filter(product => product._id != productId))
        }
    return (
        <div>
            <h1>Register New Product</h1>
            <ProductForm/>
            <hr/>
            <h1>Inventory</h1>
            {loaded && <ProductList product={product} deleteProduct={deleteProduct}/>}
        </div>
    )
}

