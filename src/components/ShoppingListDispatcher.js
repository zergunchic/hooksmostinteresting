
const ShoppingListDispatcher = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_LIST':
            return [...state, {id:action.id,name:action.name,desc:action.desc, price:action.price}]
        case 'REMOVE_FROM_LIST':
            state.filter((product)=>{
                return product.id !== action.id
            })
        default:
            return state;
    }
}

export default ShoppingListDispatcher;