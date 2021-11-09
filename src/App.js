import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './css/styles.css';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Adriana' />}></Route>
          <Route exact path='/detail' element={<ItemDetailContainer />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  );
}

export default App;
