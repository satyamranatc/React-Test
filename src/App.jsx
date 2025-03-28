import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

export default function App() {
  useEffect(() => {
    document.title = "Home"
  }, [])
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}




function Home()
{
  useEffect(() => {
    document.title = "Home"
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Homepage.</p>
    </div>
  )
}


function About()
{

  useEffect(() => {
    document.title = "About"
  }, [])
  
  return (
    <div>
      <h1>About</h1>
      <p>This is the About Page.</p>
    </div>
  )
}