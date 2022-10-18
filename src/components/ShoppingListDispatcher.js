
const ShoppingListDispatcher = (state, action)=>{
    const product = action.newProduct;
    switch(action.type){
        case 'ADD_TO_LIST':
            return [...state, {id:product.id,name:product.name,desc:product.desc, price:product.price}]
        case 'REMOVE_FROM_LIST':
            return state.filter((actualProduct)=>
                actualProduct.id !== action.id)
        default:
            return state;
    }
}

export default ShoppingListDispatcher;