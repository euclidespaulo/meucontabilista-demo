import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Login from './Components/login/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Components/login/Signup'
import Consultationform from './Components/form/Consultationform'

function App() {
  

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path=""  element={<Home/>}/>
          <Route path="/Services"  element={<Services/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Login"  element={<Login/>}/>
          <Route path="/Footer"  element={<Footer/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/userprofiles" component={UserProfileList} />
          <Route path="/accountings" component={AccountingList} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/book-consultation" component={ConsultationForm} />
          <Route path="/consultation-calendar" component={ConsultationCalendar} />
        </Routes>
      </div>
    </>
  )
}

export default App
