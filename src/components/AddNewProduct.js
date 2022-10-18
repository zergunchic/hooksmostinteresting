import React, {useState} from "react";

    const AddNewProduct = ({products, dispatch}) =>{
    
    const initialProduct = {id:'',name:'',desc:'',price:''}
    const [newProduct,changeProduct] = useState({...initialProduct});

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type:'ADD_TO_LIST',newProduct});
        changeProduct({...initialProduct});
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="card">
                <label ><h1 className='header'>Добавить к списку</h1></label>
                <div className='container header'>
                    <input className='input' type="text" value={newProduct.name} onChange={(t)=> changeProduct({...newProduct,name:t.target.value})}></input>
                    <input className='input' type="text" value={newProduct.desc} onChange={(t)=> changeProduct({...newProduct,desc:t.target.value})}></input>
                    <input className='input' type="text" value={newProduct.price} onChange={(t)=> changeProduct({...newProduct,price:t.target.value})}></input>
                    <input className='input' type='submit'></input>
                </div>
            </div>
        </form>
    )
}

export default AddNewProduct;