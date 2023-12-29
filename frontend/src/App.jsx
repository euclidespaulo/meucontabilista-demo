import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Foot from './Components/Services'

function App() {
  

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Foot"  element={<Foot/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
