import React from 'react';
import { MdHome, MdNotifications, MdMenu, MdLogout, MdAccountCircle } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'

import './Header.css'
import CustomInput from './../../../_sharecomponents/custominput/CustomInput';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import viewActions from './../../../redux/actions/viewActions';

function HeaderManager(props) {

    let navigate = useNavigate();

    const _toggleSidebar = () => {
        props.toggleSidebar();
    }

    const _navigateHome = () => {
        navigate('/');
    }

    const _signOut=()=>{
        localStorage.clear();
        navigate('/sign-in',{replace:true});
    }

    return (
        <div className='header'>
            <div className='header-first'>
                <div className='logo'>
                    <img src='http://127.0.0.1:8080/logo512.png' />
                </div>

                <div className='home' onClick={_navigateHome}>
                    <MdHome />
                    <span>Home</span>
                </div>

                <div className='search'>
                    <CustomInput
                        label='Search'
                    />
                </div>
            </div>

            <div className='header-last'>
                <div className='setting'>
                    <div onClick={_toggleSidebar}>
                        <MdMenu />
                        <span>Menu</span>
                    </div>
                    <div>
                        <IoMdCart />
                        <span>Cart</span>
                    </div>
                    <div>
                        <MdNotifications />
                        <span>Notifications</span>
                    </div>

                    <div onClick={_signOut}>
                        <MdLogout />
                        <span>Logout</span>
                    </div>
                    <div>
                        <MdAccountCircle />
                        <span>{props.username ? props.username : 'User'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        toggleSidebar: () => {
            dispacth(viewActions.toggleSidebar())
        }
    }
}

export default connect(null, mapDispatchToProps)(HeaderManager);