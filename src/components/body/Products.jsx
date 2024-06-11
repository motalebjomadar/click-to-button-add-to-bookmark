import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import PropTypes from 'prop-types';


const Products = ({handleAddToBookmark}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='w-2/3'>
            {
                products.map(product => <Product
                handleAddToBookmark={handleAddToBookmark}
                product={product}
                key={product.id}>
                </Product>)
            }
        </div>
    );
};

Products.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Products;