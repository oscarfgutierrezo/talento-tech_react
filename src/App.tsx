import './App.css'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { UserList } from '../src/components/user/UserList'
import { Login } from '../src/components/login/Login'
import { Example } from '../src/components/Example'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {UserFormCreate} from "./components/user/UserFormCreate"
import {UserFormEdit} from "./components/user/UserFormEdit"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/user" element={<UserList />} />
          <Route path="/create-user" element={<UserFormCreate />} />
          <Route path="/user/:id" element={<UserFormEdit />} />
          <Route path="/example" element={<Example/> } />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
