import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

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