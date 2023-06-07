import { TextProvider } from './components/TextEditor'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Preview}  from './components/Preview'
import {NavBar,} from './components/navbar/navbar'
import { LandingPage } from './routes/landing-page/landing-page'
import { SignUpPage } from './routes/sign-in-up-page/sign-up-page'
import { UserProvider } from './contexts/user-context'
function App() {
  return (
    <UserProvider>
    <TextProvider>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<LandingPage/>}></Route>
          <Route path='/prev' element={<Preview />}></Route>
          <Route path='/sign-up' element={<SignUpPage />}></Route>
        </Route>
        
      </Routes>
    </TextProvider>
    </UserProvider>
  )
}

export default App
