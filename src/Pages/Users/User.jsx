import moment from 'moment';
import React from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';

function User() {
    let state = useSelector(state => state.user.user)
    console.log(state);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Surname',
            selector: row => row.surname,
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
            selector: row => row.city,
        },
        {
            name: 'State',
            selector: row => row.state,
        },
        {
            name: 'Country',
            selector: row => row.country,
        },
        {
            name: 'Landmark',
            selector: row => row.landmark,
        },
    ];
    return (
        <>
            <div className='d-flex justify-content-between mb-3'>
                <h3>USERS</h3>
            </div>
            <div className="row">
                <DataTable columns={columns} customStyles={customStyles} data={state} pagination />
            </div>
        </>

    )
}

export default HOC(User)