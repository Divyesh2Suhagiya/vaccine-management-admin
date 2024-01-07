import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';
import DataTable from 'react-data-table-component';
import { deleteChildDetail, getChildDetail } from '../../Redux/Actions/childAction';
import Swal from 'sweetalert2';

function Child() {
    let state = useSelector(state => state.child.child)
    let users = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const [isOnline, setIsOnline] = useState
    (navigator.onLine);
    useEffect(() => {
      if(localStorage.getItem('islogin') &&isOnline ){
        dispatch(getChildDetail())
      }
    }, [])

    const columns = [
        {
            name: 'No.',
            selector: (row,i) => i+1,
            width:'60px'
        },
        {
            name: 'vaccines',
            selector: (row,i) => <>
                {
                    row.vaccines.map(x => {
                        return <>
                            <div>{ moment(x.remaindDate).format('ll')}</div>
                        </>
                    })
                }
            </>,
            width:'200px'
        },
        {
            name: 'Name',
            selector: row => row.enname,
        },
        {
            name: 'Mother Name',
            selector: row => row.enmotherName,
        },
        {
            name: 'BirthDate',
            selector: row => moment(row.birthDate).format('ll'),
        },
        {
            name: 'Gender',
            selector: row => row.engender,
        },
        {
            name: 'Place of birth',
            selector: row => row.enplaceOfBirth,
        },
        {
            name: 'Username',
            selector: row => users.find(x => x._id == row.userId)?.enname ,
        },
        {
            name: 'Action',
            selector: row => <>
                <button className='btn btn-danger py-1' onClick={() => deleteChild(row._id)}>DELETE</button>
            </>,
            width : '120px'
        }
    ];

    const deleteChild = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteChildDetail(id))
            }
        });
    }
  return (
    <>
        <div className='d-flex justify-content-between mb-3'>
                <h3>CHILDS</h3>
        </div>
        <div className="row bg-white">
            <DataTable columns={columns} customStyles={customStyles} data={state} pagination />
        </div>
    </>
  )
}

export default HOC(Child)