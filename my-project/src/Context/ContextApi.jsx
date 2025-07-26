import { createContext, useContext, useState } from "react";
import React from "react";
import { useRef } from "react";
const CartContext=createContext();

export const CartProvider=({children})=>{

    const hi= "checking context";

    const blogRef = useRef(null);

    const handleScrollToBlogs = () => {
      blogRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log(hi);
    };


    return(
        <CartContext.Provider value={{blogRef, handleScrollToBlogs, }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}