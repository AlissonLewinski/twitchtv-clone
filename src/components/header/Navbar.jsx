import './Navbar.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import twitchIcon from '../../assets/img/twitch-icon.PNG'

export default props => 
    <div className="navbar">
        <a href="#">
            <div className="navbar-icon">
                <img src={twitchIcon} alt="" height="31" width="29"/>
            </div>
        </a>
        <nav>
            <div className="link-container main-header-link">
                <a href="#">Seguindo</a>
            </div>
            <div className="link-container main-header-link">
                <a href="#">Procurar</a>
            </div>
            <div className="navbar-divider"></div>
            <div className="link-container main-header-link">
                <a href="#">Esports</a>
            </div>
            <div className="link-container main-header-link">
                <a href="#">Música</a>
            </div>
            <div className="link-container header-icon">
                <div className="header-ellipsis">
                    <FontAwesomeIcon icon="ellipsis-h" />
                </div>
            </div>
        </nav>
    </div>