import './App.css'

import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn/SignIn'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App