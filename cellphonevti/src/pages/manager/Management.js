import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Management.css'
function Management(props) {

    let navigate = useNavigate();

    const _navigateToProduct = () => {
        navigate('/api/v1/product-management')
    }

    return (
        <div className='management'>
            <div className='management-main'>
                <table>
                    <tr>
                        <td>
                            <div onClick={_navigateToProduct}>
                                <span>Products</span>
                            </div>
                        </td>
                        <td>
                            <div onClick={() => navigate('/api/v1/product-catlog-management')}>
                                <span>Categories</span>

                            </div>
                        </td>
                        <td>
                            <div onClick={() => navigate('/api/v1/oder-management')}>
                                <span>Orders</span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div onClick={() => navigate('/api/v1/event-management')}>
                                <span>Events</span>
                            </div>
                        </td>
                        <td>
                            <div onClick={() => navigate('/api/v1/customer-support')}>
                                <span>Customer Care</span>
                            </div>
                        </td>
                        <td>
                            <div onClick={() => navigate('/api/v1/statistical')}>
                                <span>Statistical</span>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>


        </div>
    );
}

export default Management;