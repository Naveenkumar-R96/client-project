import { createContext, useContext, useState } from "react";
import React from "react";
const CartContext=createContext();

export const CartProvider=({children})=>{

    const hi= "checking context";


    return(
        <CartContext.Provider value={{hi}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}