import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mentionslegales from './pages/Mentionslegales';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      {/* Colle le footer en bas de page */}
      <div className="d-flex flex-column min-vh-100"> 

        <NavigationBar />

        <div className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mentions-legales' element={<Mentionslegales />} />
        </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
