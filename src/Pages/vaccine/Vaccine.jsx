import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HOC } from '../../Components/HOC/HOC'
import { customStyles } from '../../Constant/Constant';
import DataTable from 'react-data-table-component';
import { Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addVaccineDetail, editVaccineDetail, getVaccineDetail } from '../../Redux/Actions/UserAction';

function Vaccine() {
    let state = useSelector(state => state.child.child)
    let users = useSelector(state => state.user.user)
    let vaccine = useSelector(state => state.vaccine.vaccine)
    const { register, handleSubmit, watch, formState: { errors }, reset , setValue} = useForm();
  const [isAdd, setisAdd] = useState()
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    if(localStorage.getItem('islogin') &&isOnline ){
      dispatch(getVaccineDetail())
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
                <img src={row.vaccineImage} alt="" width={35} height={35} />
            </>,
        },
        {
            name: 'ShortName',
            selector: row => row.shortName,
        },
        {
            name: 'Full Name',
            selector: row => row.fullName,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Symptomps',
            selector: row => row.symptoms,
        },
        {
            name: 'Dose Name',
            selector: row => row.doseName,
        },
        {
            name: 'Dose ML',
            selector: row => row.doseML,
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
        },
        {
            name: 'Date',
            selector: row => moment(row.date).format('ll'),
        },
        {
            name: 'Action',
            selector: row => <>
                <button className='btn btn-warning py-1' onClick={() => editVaccine(row)}>EDIT</button>
            </>,
        }
    ];

    const handleClose = () => {
        reset()
        setShow(false)
    };
    const onSubmit = async (data) => {
        let Existvaccine = vaccine.find(x => x._id == data._id)
        data.vaccineImage = data.vaccineImage[0] ? await toBase64(data.vaccineImage[0]) : ""
        if(data.vaccineImage == ''){
            if(Existvaccine && Existvaccine.vaccineImage){
                data.vaccineImage = Existvaccine.vaccineImage
            }else{
                delete data.vaccineImage
            }
        }
        if(isAdd){
            dispatch(addVaccineDetail(data))
        }else{
            data.id = data._id;
            dispatch(editVaccineDetail(data))
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
            if(key != 'vaccineImage'){
                setValue(key , editObj[key])
            }
            if(key == 'date'){
                let date = new Date(editObj[key])
                let editDate = date.getFullYear() + '-' + (date.getMonth()+1)+ '-' + date.getDate()
                setValue(key , editDate)
            }
        }
        setShow(true)
        setisAdd(false)
      }
  return (
    <>
        <div className='d-flex justify-content-between mb-3'>
            <h3>VACCINES</h3>
            <button className='same_theme_button px-4' onClick={OpenDialog}>ADD</button>
        </div>
        <div className="row">
            <DataTable columns={columns} customStyles={customStyles} data={vaccine} pagination />
        </div>

        <Modal show={show} onHide={handleClose} size='lg' backdrop='static'>
        <Modal.Header closeVariant='white' closeButton style={{background:'var(--theme-color)'}} className='text-white'>
          <Modal.Title>{isAdd ? 'ADD NEW' : 'EDIT'} VACCINE</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Row>
            <Col md={6}>
              <label className='input_lable'>Short Name</label>
              <input type="text" className='input_group w-100' {...register('shortName')} />
            </Col>
            <Col md={6}>
              <label className='input_lable'>Full Name</label>
              <input type="text" className='input_group w-100' {...register('fullName' , {required : true})} />
              {errors.fullName && <span className='Error_msg'>Full Name is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Price</label>
              <input type="text" className='input_group w-100' {...register('price' , {required : true})} />
              {errors.price && <span className='Error_msg'>Price is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Dose Name</label>
              <input type="text" className='input_group w-100' {...register('doseName')} />
            </Col>
            <Col md={6}>
              <label className='input_lable'>Duration</label>
              <input type="number" className='input_group w-100' {...register('duration' , {required : true})} />
              {errors.duration  && <span className='Error_msg'>Duration is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Symptoms</label>
              <input type="text" className='input_group w-100' {...register('symptoms' , {required : true})} />
              {errors.symptoms && <span className='Error_msg'>Symptoms is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Dose ML</label>
              <input type="text" className='input_group w-100' {...register('doseML' , {required : true})} />
              {errors.doseML && <span className='Error_msg'>Dose ML is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Date</label>
              <input type="date" className='input_group w-100' {...register('date' , {required : true})} />
              {errors.date && <span className='Error_msg'>Date is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Route</label>
              <input type="text" className='input_group w-100' {...register('route' , {required : true})} />
              {errors.route && <span className='Error_msg'>Route is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>Site</label>
              <input type="text" className='input_group w-100' {...register('site' , {required : true})} />
              {errors.site && <span className='Error_msg'>Site is required</span>}
            </Col>
            <Col md={6}>
              <label className='input_lable'>description</label>
              <input type="text" className='input_group w-100' {...register('description' , {required : true})} />
              {errors.description && <span className='Error_msg'>Description is required</span>}
            </Col>

            <Col md={6}>
              <label className='input_lable'>Vaccine Image</label>
              <label htmlFor="vaccineImage" className='same_theme_button bg-dark border-0 px-4 py-2 mt-1'>Choose Photo</label>
              <input type="file" className='input_group w-100 d-none' id='vaccineImage' {...register('vaccineImage' , {required : isAdd ? true : false})} />
              {errors.vaccineImage && <span className='Error_msg'>Vaccine Image is required</span>}
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

export default HOC(Vaccine)