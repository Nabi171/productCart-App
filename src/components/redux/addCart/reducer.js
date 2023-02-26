import { ADDPRODUCT, ADDTOCART, INCREMENTITEM, DECREMENTITEM } from "./actionTypes";
const initialState = {
    products: [],
    cartItems: [],
    itemCount: 0,
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
        case INCREMENTITEM:
            return {
                ...state,
                itemCount: state.itemCount + 1
            }

        case DECREMENTITEM:
            return {
                ...state,
                itemCount: state.itemCount - 1
            }

        default:
            return state;
    }
}

export default reducer;