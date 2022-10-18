import React from "react";

const Product = ({product, dispatch}) =>{

    const removeProduct = (product, dispatch) => {
        dispatch({type:'REMOVE_FROM_LIST', id:product.id})
    }

    return(
        <div className='container card '>
            <h3 className='header'>{product.name}</h3>
            {product.description}
            {product.cost}
            <button onClick={removeProduct}>Удалить</button>
        </div>
    )
}

export default Product;