import React, {useContext, useState} from "react";
import { ShoppingListContext } from "./ShoppingListContext";
import {v4 as uuidGen} from 'uuid';

    const AddNewProduct = () =>{
    
    const initialProduct = {id:'',name:'',desc:'',price:''}
    const [newProduct,changeProduct] = useState({...initialProduct});
    const {dispatch} = useContext(ShoppingListContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        newProduct.id = uuidGen();
        dispatch({type:'ADD_TO_LIST',newProduct});
        changeProduct({...initialProduct});
    };

    return(
        <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label>Наименование</label>
                    <input type="text" value={newProduct.name} onChange={(t)=> changeProduct({...newProduct,name:t.target.value})}></input>
                </div>
                <div className='field'>
                    <label>Описание</label>
                    <input  type="text" value={newProduct.desc} onChange={(t)=> changeProduct({...newProduct,desc:t.target.value})}></input>
                </div>
                <div className='field'>
                    <label>Цена</label>
                    <input  type="number" value={newProduct.price} onChange={(t)=> changeProduct({...newProduct,price:t.target.value})}></input>
                </div>
                    <input className='ui submit button blue' id='submit' type='submit' value='Добавить'></input>
                
        </form>
    )
}

export default AddNewProduct;