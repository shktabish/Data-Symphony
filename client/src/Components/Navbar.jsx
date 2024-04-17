import React, { useState } from 'react'
import { TbSearch } from "react-icons/tb"
import './navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState('')
  return (
    <nav className='navbar'>
        <div className="nav-logo">Logo</div>
        <div className="search">
            <TbSearch style={{scale:"1.5"}} />
            <input 
                type="text"
                value={search}
                id='search'
                onChange={(e) => (setSearch(e.target.value))}
                placeholder='Search here' />
        </div>
        <div className="user">
            <p style={{fontSize:"1.25rem", fontWeight:"400"}}>Tabish Shaikh</p>
            <div className="pp"></div>
        </div>
    </nav>
  )
}

export default Navbar