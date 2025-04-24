import { Home } from "./components/sections/Home"
import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from "./components/sections/About"
import { Project } from "./components/sections/Project"

function App() {


  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Project/>} />
      <Route path="/thefullstory" element={<About/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
