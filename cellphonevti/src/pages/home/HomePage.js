import React from 'react';
import HeaderManager from './header/HeaderManager';
import SidebarManager from './sidebar/SidebarManager';
import { useState } from 'react';
import './HomePage.css'
import CustomButton from './../../_sharecomponents/custombutton/CustomButton';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

function HomePage(props) {
    
    return (
        <div className='home-container'>
            <SidebarManager />
            
            <div className={props.isOpenSidebar ? 'home-main' : 'home-main sidebar-close'}>
            <HeaderManager 
                    
                    username='Nam Nguyễn'
                />
                <div className='main-content'>
                    <Outlet/>
                    
                </div>
            </div>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return {
        isOpenSidebar:state.view.isOpenSidebar
    }
}

export default connect(mapStateToProps,null)(HomePage);

