import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import Book from './Components/Book'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <div style={{background: '#fff'}}>
        <Navbar />
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Book"  element={<Book/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;
