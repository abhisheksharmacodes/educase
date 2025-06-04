import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"

import WelcomeScreen from './screens/home'
import SignUp from './screens/signup.js'
import SignIn from './screens/signin.js'
import AccountScreen from './screens/account.js'

import NoPage from './NoPage.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </HashRouter>
  )
}

export default App
