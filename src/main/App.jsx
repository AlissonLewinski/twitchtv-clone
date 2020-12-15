import './App.css'
import React from 'react'

import Header from '../components/template/Header'
import LeftBar from '../components/template/LeftBar'
import MainContent from '../components/template/MainContent'
import RightBar from '../components/template/RightBar'

import '../config/fontawesomeConfig'

export default props =>
    <div className="view">
        <div className="app">
            <Header span="header"/>
            <LeftBar span="left"/>
            <MainContent span="main"/>
            <RightBar span="right"/>
        </div>
    </div>
