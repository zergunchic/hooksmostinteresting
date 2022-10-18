import React, { useContext} from "react";
import Product from "./Product";
import AddNewProduct from "./AddNewProduct";
import { ShoppingListContext } from "./ShoppingListContext";

const ShoppingList = ()=>{
    const {products, dispatch} = useContext(ShoppingListContext);

    return (
        <div className='card'>
            <div className='header'><h1>Список покупок</h1></div>
            <AddNewProduct value = {{products, dispatch}}/>
            <div className='segment'>
                {products.length == 0?<p>Добавьте новый продукт...</p>:products.map((product)=>{
                    return(
                        <Product value={{product, dispatch}}></Product>
                    )
                })}
            </div>
        </div>
    )
}

export default ShoppingList;