import moment from 'moment';
import React from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';

function User() {
    let state = useSelector(state => state.user.user)

    const columns = [
        {
            name: 'No.',
            selector: (row,i) => i,
            width:'60px'
        },
        {
            name: 'Name',
            selector: row => row.enname,
        },
        {
            name: 'Surname',
            selector: row => row.ensurname,
        },
        {
            name: 'Gender',
            selector: row => row.engender,
        },
        {
            name: 'Relation',
            selector: row => row.enrelation,
        },
        {
            name: 'Email',
            selector: row => row.email,
            width : "200px"
        },
        {
            name: 'Mobile no.',
            selector: row => row.mobileNo,
        },
        {
            name: 'BirthDate',
            selector: row => moment(row.birthDate).format('ll'),
        },
        {
            name: 'City',
            selector: row => row.encity,
        },
        {
            name: 'State',
            selector: row => row.enstate,
        },
        {
            name: 'Country',
            selector: row => row.encountry,
        },
        {
            name: 'Landmark',
            selector: row => row.enlandmark,
        },
    ];
    return (
        <>
            <div className='d-flex justify-content-between mb-3'>
                <h3>USERS</h3>
            </div>
            <div className="row bg-white">
                <DataTable columns={columns} customStyles={customStyles} data={state} pagination />
            </div>
        </>

    )
}

export default HOC(User)