import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Menu from '../Pages/Menu';
import ReserveTable from '../Pages/ReserveTable';
import Landingpage from '../Pages/Landingpage'
import CafeLogo from '../assets/cafe_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Router>
        <header className='bg-amber-100 text-amber-800 font-semibold px-4 sm:px-8 md:px-14 py-4 shadow-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2 sm:space-x-3'>
              <img src={CafeLogo} alt='cafelogo' className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-cover"/>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">KuKu Cafe</p>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col space-y-1.5 p-2"
            >
              <span className={`block w-6 h-0.5 bg-amber-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-amber-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-amber-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg font-semibold">
              <Link to='/' className="hover:text-amber-400 transition-colors duration-200">Home</Link>
              <Link to='/about' className="hover:text-amber-400 transition-colors duration-200">About</Link>
              <Link to='/contact' className="hover:text-amber-400 transition-colors duration-200">Contact</Link>
              <Link to='/Menu' className="hover:text-amber-400 transition-colors duration-200">Menu</Link>
              <Link to='/ReserveTable' className="hover:text-amber-400 transition-colors duration-200 bg-amber-900 text-white px-3 py-2 rounded-lg">Reserve Table</Link>
            </nav>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden flex flex-col space-y-4 mt-4 text-base font-semibold">
              <Link to='/' onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-200">Home</Link>
              <Link to='/about' onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-200">About</Link>
              <Link to='/contact' onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-200">Contact</Link>
              <Link to='/Menu' onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-200">Menu</Link>
              <Link to='/ReserveTable' onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors duration-200 bg-amber-900 text-white px-3 py-2 rounded-lg inline-block text-center">Reserve Table</Link>
            </nav>
          )}
        </header>

        <Routes>
          <Route path='/' element={<Landingpage />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='/ReserveTable' element={<ReserveTable />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navbar