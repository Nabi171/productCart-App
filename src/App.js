import './App.css';
import Cart from './components/Cart';
import AddTocart from './components/AddTocart';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Header from './components/Header';

function App() {
  const [showCartComponent, setshowCartComponent] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setshowCartComponent(!showCartComponent);
  };

  const ComponentAddtoCart = () => {
    return <AddTocart />;
  }

  const ComponentCartItem = () => {
    return <Cart />;
  }



  return (
    <Provider store={store}>
      <div >
        {/* <!-- Navbar --> */}
        <Header
          handleClick={handleClick}
        />
        {/* <nav className="bg-[#171C2A] py-4">
          <div className="navBar">
            <a href="index.html"
              onClick={handleClick}
            >
              <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
            </a>

            <div className="flex gap-4">
              <a href="#home" className="navHome" id="lws-home"
                onClick={handleClick}
              > Home </a>
              <a href="cart.html" className="navCart" id="lws-cart"
                onClick={handleClick}
              >
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">0</span>
              </a>
            </div>
          </div>
        </nav> */}
        {/* <!-- Navbar ends --> */}
        {showCartComponent ? <ComponentAddtoCart /> : <ComponentCartItem />}

      </div>
    </Provider>
  );
}

export default App;
