import { BrowserRouter, Routes, Route } from 'react-router-dom'

// views
import Home from '../src/pages/Home'
import Dashboard from '../src/pages/Dashboard'
import Chat from '../src/pages/Chat'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
