import './Header.css'
import React from 'react'

import Navbar from '../header/Navbar'
import Search from '../header/Search'
import UserActions from '../header/UserActions'

export default props => 
    <header className="header">
        <Navbar/>
        <Search/>
        <UserActions/>
    </header>