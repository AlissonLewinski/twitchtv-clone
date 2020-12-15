import './Search.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => 
    <div className="search-container">
        <div className="search">
            <input className="search-input" placeholder="Buscar" type="text" name="" id=""/>    
            <div className="search-button">
                <FontAwesomeIcon icon="search" />
            </div>
        </div>
    </div>