import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'

function App() {

  return (
    <>
    <div className="container">
        <BrowserRouter>
        <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
