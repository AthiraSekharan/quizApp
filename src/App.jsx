import { Route, Routes } from 'react-router-dom'
import './App.css'
import Class from './components/Class'
import First from './components/First'

function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<First/>} /> 

     <Route path='/quiz' element={<Class/>} /> 

     </Routes>


    </>
  )
}

export default App
