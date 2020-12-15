import './UserActions.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => 
    <div className="user-actions-container">
        <div className="user-actions">
            <div className="user-actions-item">
                <FontAwesomeIcon icon="crown" />
            </div>
            <div className="user-actions-item">
                <FontAwesomeIcon icon="inbox" />
            </div>
            <div className="user-actions-item">
                <FontAwesomeIcon icon="comment-alt" />
            </div>
            <div className="user-actions-item user-actions-bits">
                <FontAwesomeIcon icon="flask" />
                <span className="user-actions-bits-label">Comprar Bits</span>
            </div>
            <div className="user-actions-item user-actions-user">
                <FontAwesomeIcon icon="user" />
                <div className="user-actions-user-status"></div>
            </div>
        </div>
    </div>