import { create } from "zustand";
import { deleteCookie, setCookie } from "cookies-next";
export const selectedProductStore = create((set, get) => ({
  products: [],
  cartOpen: false,
  discountAmount :0,
  couponData: null,

  setPrevCookies: (data) => {
    return set({
      products: data,
    });
  },


  setCartOpen: (data) => {
    return set({
      cartOpen: data,
    });
  },

  setCoupon:(data)=>{
    return set({
      discountAmount:data
    })
  },
  setCoupondata:(data)=>{
    return set({
      couponData:data
    })
  },
  setQuantity: (data, method) => {


    const copy = get().products;
    let _ = [];
    get().products.map((i) => {
      if (i.id === data) {
        if (method === "increase") {
          i.quantity += 1;
        } else if (method === "decrease" && i.quantity > 1) {
          i.quantity -= 1;
        }
      }
      _.push(i);
    });

    // console.log(_)
    // let product = [...get().products].find(prod => prod.id === data)
    deleteCookie("addedProducts");
    setCookie("addedProducts", JSON.stringify(_));
    return set({
      products: _,
    });
  },

  setIncreaseQuantityAsDuplicate: (id, increaseQuantity) => {
    let _ = [];
    get().products.map((i) => {
      if (i.id === id) {
        i.quantity += increaseQuantity;
      }
      _.push(i);
    });

    // console.log(_)
    // let product = [...get().products].find(prod => prod.id === data)
    deleteCookie("addedProducts");
    setCookie("addedProducts", JSON.stringify(_));
    return set({
      products: _,
    });
  },

  deleteSingleProduct: (data) => {
    let remainingProducts = [...get().products].filter(
      (prod) => prod.id !== data
    );
    deleteCookie("addedProducts");
    setCookie("addedProducts", JSON.stringify(remainingProducts));
    return set({
      products: remainingProducts,
    });
  },

  setProduct: (data) => {
    // console.log(data)

    const _newList = [...get().products, ...[data]];
    // console.log(_newList)
    deleteCookie("addedProducts");
    setCookie("addedProducts", JSON.stringify(_newList));

    return set({
      products: _newList,
    });
  },
}));






