import { useState } from "react";

import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { selectedProductStore } from "../store/selectedProductStore";
// import { parseCookies, setCookie } from "next-cookies";
import {shallow} from 'zustand/shallow'

const SavedOrderList = () => {
   
        const [products, setPrevCookies, deleteSingleProduct, cartOpen, setCartOpen] =
        selectedProductStore(
            (state) => [
              state.products,
              state.setPrevCookies,
              state.deleteSingleProduct,
              state.cartOpen,
              state.setCartOpen,
            ],
            shallow
          );


    return (
        <div className="flex items-center justify-center">
            
            <button className="font-medium px-4 py-2 rounded border border-gray-700 ">
                see order
            </button>
        </div>
    );
};

export default SavedOrderList;