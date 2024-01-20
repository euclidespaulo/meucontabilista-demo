import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Book from './Components/Book'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
      <div className='App' style={{background:'#f5f8fc'}}>
        <Navbar />
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Services"  element={<Services/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Book"  element={<Book/>}/>
          <Route path="/Footer"  element={<Footer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
