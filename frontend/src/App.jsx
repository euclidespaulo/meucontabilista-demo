import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Book from './Components/Book'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Book"  element={<Book/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
