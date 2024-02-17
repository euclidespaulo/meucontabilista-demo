import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';


function App() { 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  exact element={<Home/>}/>
        <Route path="/Book"  element={<Book/>} key='book-route'/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
