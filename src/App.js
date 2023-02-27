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
        <Header />

        {/* <!-- Navbar ends --> */}
        {showCartComponent ? <ComponentAddtoCart /> : <ComponentCartItem />}

      </div>
    </Provider>
  );
}

export default App;
