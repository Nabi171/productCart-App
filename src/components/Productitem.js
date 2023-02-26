import React from 'react';
import { addToCart } from './redux/addCart/actions';
import { connect, useDispatch } from 'react-redux';

const Productitem = ({ pd }) => {
    const dispacth = useDispatch();
    const { productName, category, imageUrl, price, quantity } = pd;

    const handleAddToCart = () => {
        dispacth(addToCart(productName, category, imageUrl, price, quantity));
    }
    return (
        <div class="lws-productCard">
            <img class="lws-productImage"

                // src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
                // https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60bnail.jpg

                src={imageUrl}

                alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">{productName}</h4>
                <p class="lws-productCategory">{category}</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">BDT <span class="lws-price">{price}</span></p>
                    <p class="productQuantity">QTY <span class="lws-quantity">{quantity}</span></p>
                </div>
                <button
                    onClick={handleAddToCart}
                    class="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    );
};

// export default Productitem;
export default connect(null, { addToCart })(Productitem);