import React, { useContext} from "react";
import Product from "./Product";
import AddNewProduct from "./AddNewProduct";
import { ShoppingListContext } from "./ShoppingListContext";

const ShoppingList = ()=>{
    const {products} = useContext(ShoppingListContext);
    return (

        <div className='ui segment container very padding'>
            <div className='ui header'><h1>Список покупок</h1></div>
            <AddNewProduct/>
            <div >
                {products.length === 0?<p>Добавьте новый продукт...</p>:products.map((product)=>{
                    return(
                        <Product product={product} key={product.id}></Product>
                    )
                })}
            </div>
        </div>

    )
}

export default ShoppingList;