import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import History from './components/pages/History'
import Contact from './components/pages/Contact'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/about' exact element={ <About />}></Route>
        <Route path='/history' exact element={ <History />}></Route>
        <Route path='/contact' exact element={ <Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App