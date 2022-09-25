import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Service from './components/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Mypage from './components/Mypage'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/mypage/order" element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
