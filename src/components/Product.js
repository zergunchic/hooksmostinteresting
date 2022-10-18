import React, { useContext } from "react";
import { ShoppingListContext } from "./ShoppingListContext";

const Product = ({product}) =>{
    const {dispatch} = useContext(ShoppingListContext);

    const removeProduct = () => {
        dispatch({type:'REMOVE_FROM_LIST', id:product.id})
    }

    return(
        <div className='ui segment four column grid container'>
                <div className="ui column">
                    <b>{product.name}</b>
                </div>
                <div className="ui column">
                    <span>{product.desc}</span>
                </div>
                <div className="ui column">
                    <span>{product.price}</span>
                </div>
                <div className="ui column">
                    <button className='ui button' onClick={removeProduct}>Удалить</button>
                </div>
        </div>
    )
}

export default Product;