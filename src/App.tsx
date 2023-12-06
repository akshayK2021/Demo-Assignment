
import './App.css'
import FirstPage from './Pages/FIrstPage'
import { Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import SecondPage from './Pages/SecondPage'

function App() {
  

  return (
  
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;

