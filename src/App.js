import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import {CartContextProvider} from './context/CartContext';
import Cart from './components/Cart/Cart.jsx';
import './css/styles.css';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Adri' />}></Route>
          <Route exact path='/categoria/:categoryId' element={<ItemListContainer greeting='Adri' />}></Route>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}></Route>
          {/* <Route exact path='/cart' element={<Cart />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  );
}

export default App;
