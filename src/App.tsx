
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppChrome from './components/AppChrome'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <main className="font-mono bg-background">
      <BrowserRouter>
       <Routes>
      <Route element={<AppChrome />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
    </main>
  )
}

export default App

