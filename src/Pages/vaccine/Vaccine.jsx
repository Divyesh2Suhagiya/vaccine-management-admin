import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';
import DataTable from 'react-data-table-component';

function Vaccine() {
    let state = useSelector(state => state.child.child)
    let users = useSelector(state => state.user.user)
    let vaccine = useSelector(state => state.vaccine.vaccine)
    console.log(state);

    const columns = [
        {
            name: 'ShortName',
            selector: row => row.shortName,
        },
        {
            name: 'Full Name',
            selector: row => row.fullName,
        },
        {
            name: 'Proce',
            selector: row => row.price,
        },
        {
            name: 'BirthDate',
            selector: row => moment(row.date).format('ll'),
        },
        {
            name: 'Dose Name',
            selector: row => row.doseName,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'route',
            selector: row => row.route ,
        },
        {
            name: 'site',
            selector: row => row.site ,
        },
        {
            name: 'Description',
            selector: row => row.description ,
            wrap : true,
            width : "200px"
        }
    ];
  return (
    <>
        <div className='d-flex justify-content-between mb-3'>
                <h3>VACCINES</h3>
        </div>
        <div className="row">
            <DataTable columns={columns} customStyles={customStyles} data={vaccine} pagination />
        </div>
    </>
  )
}

export default HOC(Vaccine)