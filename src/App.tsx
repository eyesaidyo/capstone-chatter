import { TextEditor, TextProvider } from './routes/text-editor/TextEditor'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Preview}  from './routes/preview/Preview'
import {NavBar,} from './components/navbar/navbar'
import { LandingPage } from './routes/landing-page/landing-page'
import { SignUpPage } from './routes/sign-in-up-page/sign-up-page'
import { UserProvider } from './contexts/user-context'
import { Dashboard } from './routes/dashboard/dashboard'
import { Feed } from './routes/feed/feed'
import { Drafts } from './routes/drafts/drafts'
function App() {

  return (
    <UserProvider>
    <TextProvider>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<LandingPage/>}></Route>
          
          <Route path='/sign-up' element={<SignUpPage />}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Feed/>}></Route>
          <Route path='create' element={<TextEditor/>} ></Route>
          <Route path='prev' element={<Preview />}></Route>
          <Route path='drafts' element={<Drafts />}></Route>
        </Route>
      </Routes>
    </TextProvider>
    </UserProvider>
  )
}

export default App
