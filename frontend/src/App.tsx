import './App.css'

import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App