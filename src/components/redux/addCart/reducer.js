import { ADDPRODUCT, ADDTOCART } from "./actionTypes";
const initialState = {
    products: [],
    cartItems: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        productName: action.payload.productName,
                        category: action.payload.category,
                        imageUrl: action.payload.imageUrl,
                        price: action.payload.price,
                        quantity: action.payload.quantity
                    }
                ]
            };

        // tp
        case ADDTOCART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };


        default:
            return state;
    }
}

export default reducer;