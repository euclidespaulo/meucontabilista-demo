import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import NavBar from './Components/common/NavBar'
import Footer from './Components/common/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path=""  element={<Home/>}/>
        <Route path="/Book"  element={<Book/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
