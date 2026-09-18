import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header'
import Home from './pages/Home/Home'
import Cars from './pages/Cars/Cars'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carros" element={<Cars/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App