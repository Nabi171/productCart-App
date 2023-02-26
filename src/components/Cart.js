import React from 'react';
import CartItem from './CartItem';
import Billdetails from './Billdetails';
import { connect, useSelector } from 'react-redux';
import { addToCart } from './redux/addCart/actions';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    console.log(cartItems)
    // addToCart

    return (
        <div>
            <main class="py-16">
                <div class="container 2xl:px-8 px-2 mx-auto">
                    <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div class="cartListContainer">
                        <div class="space-y-6">
                            {/* <!-- Cart Item --> */}

                            {cartItems.map(item => <CartItem />)}
                            {/* <CartItem /> */}

                            {/* <!-- Cart Items Ends --> */}

                        </div>

                        {/* <!-- Bill Details --> */}
                        <div>
                            <Billdetails></Billdetails>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};



// const mapStateToProps = state => {
//     return {
//         cartItems: state.cartItems
//     }
// }


// export default connect(mapStateToProps)(Cart);
// export default connect(null, { addToCart })(Cart);
export default Cart;