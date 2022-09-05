import React from 'react';
import { menuLinks } from '../../../data/Data';
import CustomLinks from '../../../_sharecomponents/customlinks/CustomLinks';

import {MdManageAccounts} from 'react-icons/md'

import './Sidebar.css'
import { connect } from 'react-redux';
function SidebarManager(props) {

    return (
        <div className={props.isOpenSidebar ? 'sidebar' : 'sidebar sidebar-close'}>
            <div className='sidebar-head'>
                <MdManageAccounts/>
                <span>Management</span>
            </div>

            <div className='sidebar-main'>
            <CustomLinks
                menuLinks={menuLinks}
            />
            </div>
            <div className='sidebar-bottom'>
                <span>CellPhoneVTI</span>
            </div>

        </div>
    );
}

const mapStateToProps=(state)=>{
    return {
        isOpenSidebar:state.view.isOpenSidebar
    }
}

export default connect(mapStateToProps,null)(SidebarManager);