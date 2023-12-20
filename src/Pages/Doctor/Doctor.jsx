import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';
import DataTable from 'react-data-table-component';
import { Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addVaccineDetail, deleteVaccineDetail, editVaccineDetail, getVaccineDetail } from '../../Redux/Actions/vaccineAction';
import Swal from 'sweetalert2';
import { addDoctorDetail, deleteDoctorDetail, editDoctorDetail, getDoctorDetail } from '../../Redux/Actions/DoctorAction';

function Doctor() {
    let doctors = useSelector(state => state.doctor.doctor)
    let state = useSelector(state => state)
    let vaccine = useSelector(state => state.vaccine.vaccine)
    const { register, handleSubmit, watch, formState: { errors }, reset , setValue} = useForm();
  const [isAdd, setisAdd] = useState()
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    if(localStorage.getItem('islogin') &&isOnline ){
      dispatch(getDoctorDetail())
    }
  }, [])


  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

    const columns = [
        {
            name: 'Image',
            selector: row => <>
                <img src={row.doctorImage} alt="" width={35} height={35} />
            </>,
        },
        {
            name: 'name',
            selector: row => row.enname,
        },
        {
            name: 'Degree',
            selector: row => row.endegree,
        },
        {
            name: 'Mobile no.',
            selector: row => row.enmobileNo,
        },
        {
            name: 'Address',
            selector: row => row.enaddress ,
            wrap : true,
            width : "200px"
        },
        {
            name: 'Area',
            selector: row => row.enarea 
        },
        {
            name: 'Action',
            selector: row => <>
                <button className='btn btn-warning py-1 me-1' onClick={() => editVaccine(row)}>EDIT</button>
                <button className='btn btn-danger py-1' onClick={() => deleteVaccine(row._id)}>DELETE</button>
            </>,
            width:'200px'
        }
    ];

    const handleClose = () => {
        reset()
        setShow(false)
    };
    const onSubmit = async (data) => {
        let ExistDoctor = vaccine.find(x => x._id == data._id)
        data.doctorImage = typeof data.doctorImage == 'string' ? "" :  await toBase64(data.doctorImage[0])
        if(data.doctorImage == ''){
            if(ExistDoctor && ExistDoctor.doctorImage){
                data.doctorImage = ExistDoctor.doctorImage
            }else{
                delete data.doctorImage
            }
        }
        if(isAdd){
            dispatch(addDoctorDetail(data))
        }else{
            data.id = data._id;
            dispatch(editDoctorDetail(data))
        }
        handleClose()
    }
    const OpenDialog = () => {
        setisAdd(true)
        setShow(true)
        reset()
      }

      const editVaccine = (editObj) => {
        for(let key in editObj){
            if(key.startsWith('en')){
              editObj[key.split('en')[1]] = editObj[key]
            }
        }
        for(let key in editObj){
          setValue(key , editObj[key])
        }
        setShow(true)
        setisAdd(false)
      }

      const deleteVaccine = (id) => {
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
            dispatch(deleteDoctorDetail(id))
          }
        });
      }
  return (
    <>
        <div className='d-flex justify-content-between mb-3'>
            <h3>DOCTORS</h3>
            <button className='same_theme_button px-4' onClick={OpenDialog}>ADD</button>
        </div>
        <div className="row bg-white">
            <DataTable columns={columns} customStyles={customStyles} data={doctors} pagination />
        </div>

        <Modal show={show} onHide={handleClose} size='lg' backdrop='static'>
        <Modal.Header closeVariant='white' closeButton style={{background:'var(--theme-color)'}} className='text-white'>
          <Modal.Title>{isAdd ? 'ADD NEW' : 'EDIT'} DOCTOR</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Row>
            <Col md={6}>
              <label className='input_lable'>Name</label>
              <input type="text" className='input_group w-100' {...register('name', {required : true})} />
              {errors.name && <span className='Error_msg'>Name is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Degree</label>
              <input type="text" className='input_group w-100' {...register('degree' , {required : true})} />
              {errors.degree && <span className='Error_msg'>Degree is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Mobile no.</label>
              <input type="number" className='input_group w-100' {...register('mobileNo' , {required : true})} />
              {errors.mobileNo  && <span className='Error_msg'>Mobile number is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Area</label>
              <input type="text" className='input_group w-100' {...register('area' , {required : true})} />
              {errors.area && <span className='Error_msg'>Area is required</span>}
            </Col>
            <Col md={12}>
              <label className='input_lable'>Address</label>
              <textarea className='input_group w-100' style={{resize:'none'}} cols="10" rows="2" {...register('address' , {required : true})}></textarea>
              {errors.address && <span className='Error_msg'>Address is required</span>}
            </Col>

            <Col md={6}>
              <label className='input_lable'>Doctor Image</label>
              <label htmlFor="doctorImage" className='same_theme_button bg-dark border-0 px-4 py-2 mt-1'>Choose Photo</label>
              <input type="file" className='input_group w-100 d-none' id='doctorImage' {...register('doctorImage' , {required : isAdd ? true : false})} />
              {errors.doctorImage && <span className='Error_msg'>Doctor Image is required</span>}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button className='same_theme_button px-4 py-2' onClick={handleSubmit(onSubmit)}>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HOC(Doctor)