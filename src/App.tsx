import './App.css'
import {Footer} from '../src/components/Footer'
import {Header} from '../src/components/Header'
import {UserList} from '../src/components/user/UserList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/user' element={<UserList/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
