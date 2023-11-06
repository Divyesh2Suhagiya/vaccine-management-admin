import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';
import DataTable from 'react-data-table-component';

function Child() {
    let state = useSelector(state => state.child.child)
    let users = useSelector(state => state.user.user)
    console.log(state);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Mother Name',
            selector: row => row.motherName,
        },
        {
            name: 'BirthDate',
            selector: row => moment(row.birthDate).format('ll'),
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Place of birth',
            selector: row => row.placeOfBirth,
        },
        {
            name: 'Username',
            selector: row => users.find(x => x._id == row.userId)?.name ,
        }
    ];
  return (
    <>
        <div className='d-flex justify-content-between mb-3'>
                <h3>CHILDS</h3>
        </div>
        <div className="row">
            <DataTable columns={columns} customStyles={customStyles} data={state} pagination />
        </div>
    </>
  )
}

export default HOC(Child)