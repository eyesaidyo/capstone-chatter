import { TextEditor } from './components/TextEditor'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Preview}  from './components/Preview'
import {TextProvider,} from './components/TextEditor'
function App() {
  return (
    <TextProvider>
      <Routes>
        <Route path='/' element={<TextEditor/>}></Route>
        <Route path='/prev' element={<Preview />}></Route>
      </Routes>
    </TextProvider>
  )
}

export default App
