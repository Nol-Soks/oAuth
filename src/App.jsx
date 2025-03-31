
import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Jonkes } from './Components/jokes'
import { Login } from './Components/Login'
import './index.css'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route
              path="/jonkes" 
              element={<Jonkes/>}
              />
            <Route
            path='/'
            element={<Login/> }
            />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
