import React, { createContext, useReducer} from "react";
import ShoppingListDispatcher from "./ShoppingListDispatcher";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = ({children})=>{
    const [products, dispatch] = useReducer(ShoppingListDispatcher,[]);

    return(
        <ShoppingListContext.Provider value={{products, dispatch}}>
            {children}
        </ShoppingListContext.Provider>
    )
};

export default ShoppingListContextProvider;