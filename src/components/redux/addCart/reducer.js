import { ADDPRODUCT } from "./actionTypes";
const initialState = {
    products: [],
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
        default:
            return state;
    }
}

export default reducer;