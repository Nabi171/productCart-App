import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './redux/addCart/actions';
import { connect } from 'react-redux';
import Productitem from './Productitem';
import Nodata from './Nodata';

const AddTocart = ({ addProduct }) => {

    const products = useSelector((state) => state.products);
    // const dispatch = useDispatch();
    // const [productName, setProductName] = useState('');
    // const [category, setCategory] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    // const [price, setPrice] = useState('');
    // const [quantity, setQuantity] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // const newProduct = {
        //     productName,
        //     category,
        //     imageUrl,
        //     price,
        //     quantity,
        // };

        const productName = event.target.elements.productName.value;
        const category = event.target.elements.category.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const price = parseFloat(event.target.elements.price.value);
        const quantity = parseInt(event.target.elements.quantity.value);
        addProduct(productName, category, imageUrl, price, quantity);


        // console.log(newProduct);
        // dispatch(addProduct(newProduct));
    };


    return (
        <div>
            <main class="py-16">
                <div class="productWrapper">
                    {/* <!-- products container --> */}
                    <div class="productContainer" id="lws-productContainer">
                        {/* <!-- product item --> */}
                        {
                            (products.length == 0) ? <Nodata /> : products.map(pd =>

                                <Productitem pd={pd} ></Productitem>
                            )
                        }
                        {/* <!-- product item ends --> */}

                        {/* <!-- product item --> */}
                        {/* <div class="lws-productCard">
                            <img class="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
                            <div class="p-4 space-y-2">
                                <h4 class="lws-productName">Women Winter Clothes</h4>
                                <p class="lws-productCategory">Tops</p>
                                <div class="flex items-center justify-between pb-2">
                                    <p class="productPrice">BDT <span class="lws-price">100</span></p>
                                    <p class="productQuantity">QTY <span class="lws-quantity">30</span></p>
                                </div>
                                <button class="lws-btnAddToCart">Add To Cart</button>
                            </div>
                        </div> */}
                        {/* <!-- product item ends --> */}
                    </div>
                    {/* <!-- products container ends --> */}
                    <div>
                        {/* <!-- Product Input Form --> */}
                        <div class="formContainer">
                            <h4 class="formTitle">Add New Product</h4>
                            <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm"
                                onSubmit={handleSubmit}
                            >
                                {/* <!-- product name --> */}
                                <div class="space-y-2">
                                    <label for="name">Product Name</label>
                                    <input
                                        name="productName"
                                        // value={productName} onChange={(e) => setProductName(e.target.value)}
                                        class="addProductInput" id="lws-inputName" type="text" required />
                                </div>
                                {/* <!-- product category --> */}
                                <div class="space-y-2">
                                    <label for="category">Category</label>
                                    <input
                                        name="category"
                                        // value={category} onChange={(e) => setCategory(e.target.value)}
                                        class="addProductInput" id="lws-inputCategory" type="text" required />
                                </div>
                                {/* <!-- product image url --> */}
                                <div class="space-y-2">
                                    <label for="image">Image Url</label>
                                    <input
                                        name="imageUrl"
                                        // value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                                        class="addProductInput" id="lws-inputImage" type="text" required />
                                </div>
                                {/* <!-- price & quantity container --> */}
                                <div class="grid grid-cols-2 gap-8 pb-4">
                                    {/* <!-- price --> */}
                                    <div class="space-y-2">
                                        <label for="price">Price</label>
                                        <input
                                            name="price"
                                            // value={price} onChange={(e) => setPrice(e.target.value)}
                                            class="addProductInput" type="number" id="lws-inputPrice" required />
                                    </div>
                                    {/* <!-- quantity --> */}
                                    <div class="space-y-2">
                                        <label for="quantity">Quantity</label>
                                        <input
                                            name="quantity"
                                            // value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                            class="addProductInput" type="number" id="lws-inputQuantity" required />
                                    </div>
                                </div>
                                {/* <!-- submit button --> */}
                                <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
                            </form>
                        </div>
                        {/* <!-- Product Input Form Ends --> */}
                    </div>
                </div>
            </main>
        </div>
    );
};

// export default AddTocart;
export default connect(null, { addProduct })(AddTocart);
