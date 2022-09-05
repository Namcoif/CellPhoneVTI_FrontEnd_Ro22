import React from 'react';
import CustomInput from './../../../_sharecomponents/custominput/CustomInput';
import { MdFilterAlt } from 'react-icons/md'
import CustomSelect from './../../../_sharecomponents/customselect/CustomSelect';
import CustomButton from './../../../_sharecomponents/custombutton/CustomButton';
import CustomTable from '../../../_sharecomponents/customtable/CustomTable';
function MProducts(props) {
    const option = ['a', 'b', 'c']

    const theader = ['a', 'b', 'c']
    return (
        <div className='management-product'>
            <div className='mproduct-header'>
                <h1>Product Management</h1>
                <CustomInput />
                <div>
                    <MdFilterAlt />
                    <CustomSelect
                        label='All'
                        option={option}
                    />
                </div>
                <CustomButton>Add Product</CustomButton>
            </div>
            <div className='mproduct-main'>
                <CustomTable
                    theader={theader}
                    // listData={{}}
                />
            </div>
        </div>
    );
}

export default MProducts;