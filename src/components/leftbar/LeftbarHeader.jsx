import './LeftbarHeader.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => 
    <div className="leftbar-header">
        <span className="leftbar-header-title">CANAIS SEGUIDOS</span>
        <div className="leftbar-header-arrow">
            <FontAwesomeIcon icon="arrow-left"/>
        </div>
    </div>