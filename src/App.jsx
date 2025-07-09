import './css/App.css'
import Favorites from './pages/Favorites'
import Homepage from './pages/Homepage'
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
    </div>
  )
}
export default App;

