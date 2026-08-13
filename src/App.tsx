
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppChrome from './components/AppChrome'
import About from './components/About'
import Home from './components/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

function App() {
  return (
    <main className="font-mono bg-background">
      <BrowserRouter>
       <Routes>
      <Route element={<AppChrome />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<BlogList />} />
        <Route path="/posts/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
    </main>
  )
}

export default App

