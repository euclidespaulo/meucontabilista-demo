import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Foot from './Components/Services'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Service"  element={<Service/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Login"  element={<Login/>}/>
          <Route path="/Foot"  element={<Foot/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
