import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mentionslegales from './pages/Mentionslegales';


function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mentions-legales' element={<Mentionslegales />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
