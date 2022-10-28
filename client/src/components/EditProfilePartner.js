import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import maps from "../components/Dummy/maps.png"
import mapkecil from "../components/Dummy/mapkecil.png"
import { useNavigate } from 'react-router-dom';


const EditProfilePartner = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate ();

  return (
    <div>
        <Container className='w-75 margintop'>
            <h2 className=''>Edit Profile Partner</h2>
            <form action="">
                <div className='d-flex mt-5 mb-3'>
                    <input type="text" className='w-75 me-3 labeladd' placeholder='   Title' />
                    <div class="input-group mb-3 w-25">
                        <label class="input-group-text labeladd rounded-end fw-bolder" for="inputGroupFile01">Attach File</label>
                        <input type="file" class="form-control" id="inputGroupFile01" hidden/>
                    </div>
                </div>
                <input type="email" className='w-100 labeladd mb-2' placeholder='   Email'/>
                <input type="number" className='w-100 labeladd mt-2' placeholder='   Phone'/>
                <div className='d-flex my-3'>
                    <input type="text" className='w-75 me-3 labeladd' placeholder='   Title' />
                    <div class="input-group mb-3 w-25">
                        <button class=" labeladd rounded-end labeledit fw-bolder" type="button" onClick={handleShow}>Select On Map <img src={mapkecil} alt="" /></button>
                        <Modal show={show} onHide={() => setShow(false)} size="xl" className=' d-flex justify-content-center align-items-center' backdrop="static">
                            <Modal.Body>
                            <img src={maps} alt="" className='w-100 p-2'/>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='w-25 fw-bold text-light rounded tombolsave' onClick={()=> navigate('/profile-partners')}>Save</button>
                </div>
            </form>
        </Container>
        <>
        </>
    </div>
  )
}

export default EditProfilePartner