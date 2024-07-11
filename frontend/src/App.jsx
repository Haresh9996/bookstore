import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './Contact/Contact'
import About from './About/About'

function App() {

  return (
    <>
      <div className='dark:bg-white dark:text-black'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
