import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ItemInfo from './components/ImteInfo'
import Login from './components/Login'
import Mypage from './components/Mypage'
import Service from './components/Service'
import SignUp from './components/SignUp'
import store from './redux/store'
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
            <Route path="mypage/order/:itemId" element={<ItemInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
