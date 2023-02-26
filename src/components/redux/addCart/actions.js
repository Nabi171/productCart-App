import { ADDPRODUCT, ADDTOCART, INCREMENTITEM, DECREMENTITEM } from "./actionTypes";

export const addProduct = (productName, category, imageUrl, price, quantity) => {
    return {
        type: ADDPRODUCT,
        payload: { productName, category, imageUrl, price, quantity }
    };
}

//tp

export const addToCart = (productName, category, imageUrl, price, quantity) => {
    return {
        type: ADDTOCART,
        payload: {
            productName,
            category,
            imageUrl,
            price,
            quantity
        }
    };
}

export const incrementItem = () => {
    return {
        type: INCREMENTITEM,

    }
}


export const decrementItem = () => {
    return {
        type: DECREMENTITEM,

    }
}