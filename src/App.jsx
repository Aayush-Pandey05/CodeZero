import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'

const App=() =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path='/'
            element={<>
            <Hero />
            <About />
            </>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App