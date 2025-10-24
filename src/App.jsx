import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Menu from './Components/shared/Menu'
import Footer from './Components/shared/Footer'
import Home from './Components/pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App;
