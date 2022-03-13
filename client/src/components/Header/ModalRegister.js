import {useState, useContext} from 'react'
import { Form, Modal, Button, Image  } from 'react-bootstrap';
import { API, UserContext } from '../../export/exportComponent'
import { cordinat } from  '../../export/exportImage'

export default function ModalRegister({ deactive }) {

    const [state, dispatch] = useContext(UserContext);

    const [showRegister, setshowRegister] = useState(true);
    const handleCloseRegister = () => {
        setshowRegister(false);
        deactive()
    }

    const handleSUbmitRegister = async (e) => {
        e.preventDefault();

        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: e.target.phone.value,
            address: 'empty adress'
        }; const body = JSON.stringify(data);

        const response = await API.post("/register", body, { headers: { "Content-type": "application/json", } } );
        
        if(response.status==200){
            setshowRegister(false);
            deactive();
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data } );
        }
        console.log(data);
    }

    return(
        <>
            <Modal size='sm' show={showRegister} centered onHide={handleCloseRegister} className='rounded order-border'>
                <Modal.Body>
                    <Image className='cordinat-img sticky-top' src={cordinat}></Image>
                    <h2 className='text-red py-4 fw-bold text-center'>Register</h2>   
                    <Form onSubmit={handleSUbmitRegister}>
                        <Form.Group>
                            <Form.Label for="fullName">
                                <h6 className='fw-bold form-label'>fullName</h6>
                            </Form.Label>
                            <Form.Control type="fullName" name="name" id="fullName" className='mb-2 py-2 bg-soft b-red border-2' placeholder="Email" />
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