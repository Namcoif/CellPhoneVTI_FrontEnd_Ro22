import React from 'react';
import { MdEdit, MdOutlineDeleteForever } from 'react-icons/md'
import './CustomTable.css'
function CustomTable(props) {
    const { listData, _onHandleClickEdit, _onHandleClickDelete, theader, stt } = props

    const tHeader = theader.map((header) => <th>{header}</th>)

    const tData = listData ? listData.map((data, key) => (
        <tr key={data.id}>

            <td>{key + 1}</td>

            {Object.values(data).map((item) => (
                <td>{item}</td>
            ))}

            <td>
                <MdEdit fontSize="1.2rem"
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                    onClick={() => _handleClickEdit(data)}
                />
                <MdOutlineDeleteForever fontSize="1.2rem"
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    onClick={() => _handleClickDelete(data.id)}
                />
            </td>
        </tr>

    )) : null




    const _handleClickEdit = (group) => {
        _onHandleClickEdit(group)
    }

    const _handleClickDelete = (id) => {
        _onHandleClickDelete(id)

    }
    return (
        <div className='table'>
            <table>
                <tbody>
                    <tr>{tHeader}</tr>
                    {tData}
                </tbody>
            </table>
        </div>
    );
}

export default CustomTable;