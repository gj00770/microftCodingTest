import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Service from './components/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
