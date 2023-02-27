import { ADDPRODUCT, ADDTOCART, INCREMENTITEM, DECREMENTITEM, ADDTOTATAL, DELETE_PRODUCT } from "./actionTypes";

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

export const addTotal = (itemCount, price) => {
    return {
        type: ADDTOTATAL,
        payload: {
            itemCount,
            price
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

export const deleteProduct = (productName) => {
    return {
        type: DELETE_PRODUCT,
        payload: productName,
    };
};
