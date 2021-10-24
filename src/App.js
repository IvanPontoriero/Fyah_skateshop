import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './css/styles.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Adriana' />
    </>
  );
}

export default App;
