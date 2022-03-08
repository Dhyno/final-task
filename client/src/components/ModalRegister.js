import React, {useState} from 'react'
import { Form, Modal, Button, Image  } from 'react-bootstrap';

import cordinat from '../assets/images/navbar/cordinat.svg'

export default function ModalRegister({ deactive }) {

    const [showRegister, setshowRegister] = useState(true);
    const handleCloseRegister = () => {
        setshowRegister(false);
        deactive()
    }

    return(
        <>
            <Modal size='sm' show={showRegister} centered onHide={handleCloseRegister} className='rounded order-border'>
                <Modal.Body>
                    <Image className='cordinat-img sticky-top' src={cordinat}></Image>
                    <h2 className='text-red py-4 fw-bold text-center'>Register</h2>   
                    <Form>
                        <Form.Group>
                            <Form.Label for="fullName">
                                <h6 className='fw-bold form-label'>fullName</h6>
                            </Form.Label>
                            <Form.Control type="fullName" name="fullName" id="fullName" className='mb-2 py-2 bg-soft b-red border-2' placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="email">
                                <h6 className='fw-bold form-label'>Email</h6>
                            </Form.Label>
                            <Form.Control type="email" name="email" id="email" className='mb-2 py-2 bg-soft b-red border-2' placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="password">
                                <h6 className='fw-bold form-label'>Password</h6>
                            </Form.Label>
                           <Form.Control type="password" name="password" id="password" className='mb-2 py-2 bg-soft b-red border-2' placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="phone">
                                <h6 className='fw-bold form-label'>Phone</h6>
                            </Form.Label>
                           <Form.Control type="phone" name="phone" id="phone" className='mb-2 py-2 bg-soft b-red border-2' placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'> Register </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}