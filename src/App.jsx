import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda'}/>
    </>
  )
}

export default App
