import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';
import NavBar from './components/NavBar/NavBar.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import Login from './components/Modals/Login';
import SignUp from './components/Modals/SignUp';
import Footer from './components/Footer/Footer.jsx';
import './css/styles.css';

function App() {
  return (
    <CartContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Carousel />}></Route>
          <Route exact path='/' element={<ItemListContainer greeting='POPULAR' />}></Route>
          <Route exact path='/categoria/:categoryId' element={<ItemListContainer greeting='Adri' />}></Route>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route exact path='/login' component={<Login />}></Route>
          <Route exact path='/sign-up' component={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
    </CartContextProvider>
  );
}

export default App;
