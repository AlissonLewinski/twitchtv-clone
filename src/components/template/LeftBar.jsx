import './LeftBar.css'
import React from 'react'

import LeftbarHeader from '../leftbar/LeftbarHeader'
import LeftbarChannel from '../leftbar/LeftbarChannel'

import twitchIcon from '../../assets/img/twitch-icon.PNG'
import lertet from '../../assets/img/danilo.PNG'
import alisson from '../../assets/img/alisson.png'
import violet from '../../assets/img/violet.jpeg'
import laurenAquilina from '../../assets/img/lauren-aquilina.jpg'

export default props => 
    <aside className="leftbar">
        <LeftbarHeader />
        <div className="leftbar-channels">
            <LeftbarChannel img={lertet} name="Lertet" game="Poketibia" viewers="31 mil" />
            <LeftbarChannel img={alisson} name="Alisson" game="Life is Strange" viewers="13 mil"/>
            <LeftbarChannel img={violet} name="Violet" game="Minecraft" viewers="5 mil" />
            <LeftbarChannel img={laurenAquilina} name="Lauren_Aquilina" game="King" viewers="786" />
            <LeftbarChannel img={laurenAquilina} name="Cellbit" game="RPGs de mesa" viewers="9,7 mil" />
        </div>
    </aside>