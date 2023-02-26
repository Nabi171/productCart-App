import React from 'react';
import CartItem from './CartItem';
import Billdetails from './Billdetails';

const Cart = () => {
    return (
        <div>
            <main class="py-16">
                <div class="container 2xl:px-8 px-2 mx-auto">
                    <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div class="cartListContainer">
                        <div class="space-y-6">
                            {/* <!-- Cart Item --> */}
                            {/* <Cart></Cart> */}
                            <CartItem />
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

export default Cart;