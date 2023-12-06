import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstPage from './Pages/FIrstPage'
import { Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import SecondPage from './Pages/SecondPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

