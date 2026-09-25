import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header'
import Home from './pages/Home/Home'
import Cars from './pages/Cars/Cars'
import CarDetails from './pages/CarDetails/CarDetails'
import FavoritesProvider from './context/FavoritesContext.jsx'
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
    <FavoritesProvider>
    <div className="app">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carros" element={<Cars/>} />
        <Route path="/favoritos" element={<Favorites/>}/>
        <Route path="/carros/:id" element={<CarDetails/>} />
      </Routes>
    </div>
    </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App