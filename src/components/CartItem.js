import React, { useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { incrementItem, decrementItem } from './redux/addCart/actions';

const CartItem = ({ item, itemCount, incrementItem, decrementItem }) => {
    const { productName, category, imageUrl, price, quantity } = item;
    // const dispatch = useDispatch();
    // const itemCount = useSelector((state) => state.itemCount);
    // const [count, setCount] = useState(0);
    // inc = 0;
    // const increament = () => {
    //     if (itemCount < quantity) {
    //         dispatch(incrementItem);
    //     }
    // }
    // connect

    // const decrement = () => {

    //     if (itemCount > 0) {

    //         dispatch(decrementItem);
    //     }

    // }
    // vonst decrement=)=><P></P>
    const amount = itemCount * price;

    return (
        <div>
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img className="lws-cartImage" src={imageUrl} alt="product" />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                        <h4 className="lws-cartName">{productName}</h4>
                        <p className="lws-cartCategory">{category}</p>
                        <p>BDT <span className="lws-cartPrice">{price}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity"
                            onClick={(itemCount < quantity) && incrementItem}
                        >
                            <i className="text-lg fa-solid fa-plus"

                            ></i>
                        </button>
                        <span className="lws-cartQuantity">{itemCount}</span>
                        <button className="lws-decrementQuantity"

                            onClick={(itemCount > 0) && decrementItem}>
                            <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{(itemCount >= 0) && amount}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart">
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        itemCount: state.itemCount
    }
}


// export default CartItem;
// export default connect(null, { addToCart })(CartItem);

export default connect(mapStateToProps, { incrementItem, decrementItem })(CartItem);