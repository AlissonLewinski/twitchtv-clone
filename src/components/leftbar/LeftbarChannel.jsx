import './LeftbarChannel.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//<img src={props.img} alt=""/>

export default props => 
    <div className="leftbar-channel">
        <div className="leftbar-channel-img">
            <img src={props.img} alt="ss"/>
        </div>
        <div className="leftbar-channel-info">
            <span className="leftbar-channel-info-name">{props.name}</span>
            <span className="leftbar-channel-info-game">{props.game}</span>
        </div>
        <div className="leftbar-channel-status-container">
            <div className="leftbar-channel-status">
                <div className="leftbar-channel-status-live-dot">

                </div>
                <span className="leftbar-channel-status-viewers">
                    {props.viewers}
                </span>
            </div>
        </div>
    </div>