import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div className='loader'>
        <Spinner animation="border" role="status" variant='light' style={{height:'70px' , width:'70px'}}>
        </Spinner>
    </div>
  )
}

export default Loader