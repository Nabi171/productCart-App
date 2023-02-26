import { ADDPRODUCT } from "./actionTypes";

export const addProduct = (productName, category, imageUrl, price, quantity) => {
    return {
        type: ADDPRODUCT,
        payload: { productName, category, imageUrl, price, quantity }
    };
}