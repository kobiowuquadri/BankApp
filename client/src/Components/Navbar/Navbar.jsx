import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { useAuth } from '../../Context/AuthContext'

function Navbar() {
  const {user, logout} = useAuth()

  const handleLogout = () => {
    logout()
  }
  return (
    <header>
    <Link to='/'><img src={logo} alt="" /></Link>
    <nav className="nav_bar">
      <ul>
        <li><a href="#" className="nav_link">Home</a></li>
        <li><a href="#about" className="nav_link">About</a></li>
        {
          !user ? (
            <>
              <li><Link className='nav_link' to={'/login'}>Login</Link></li>
            <li><Link className='nav_link' to={'/register'}>Register</Link></li>
            </>
          ) : (
           <>
              <li><Link className='nav_link' onClick={handleLogout}>Logout</Link></li>
            <li><Link to='/customerdashboard' className='nav_link'>Dashboard</Link></li>
           </>
          )
        }
      </ul>
    </nav>
  </header>
  )
}

export default Navbar