import './App.css'

import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App