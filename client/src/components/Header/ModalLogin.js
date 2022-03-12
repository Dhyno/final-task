import React, {useContext, useState} from 'react'
import { Form, Modal, Button, Image } from 'react-bootstrap';

import { API } from '../../config/api';
import { UserContext } from '../../context/userContext';
import cordinat from '../../assets/images/navbar/cordinat.svg'
import { DataContext } from '../../context/dataContext'; 

export default function ModalLogin({ deactive, activereg }) {
    
    const [state, dispatch] = useContext(UserContext);
    const [dataState, dispatchData] = useContext(DataContext)

    const [showLogin, setShowLogin] = useState(true);
    const handleCloseLogin = () => {
        setShowLogin(false);
        deactive()
    }

    const handleLoginSubmit = async e => {
        e.preventDefault();
        handleCloseLogin();

        // console.log(e.target.email.value);
        // console.log(e.target.password.value);

        const formLogin={email: e.target.email.value, password: e.target.password.value}

        const body = JSON.stringify(formLogin);
        const config = {
            headers: {
            "Content-type": "application/json",
            },
        };

        const response = await API.post("/login", body, config);
        // console.log(response.data.data.token);
        
        if(response.status==200){
            deactive();
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data.data,
            });

            const responseAPI = await API.get('/bookmark',{headers: { "Authorization": `Bearer ${response.data.data.token}`} })
            // const indeksBookmark=responseAPI.data.result.map( data => data.idJourney);
            // console.log(responseAPI.data.result)
            dispatchData({
                type: 'INIT_BOOKMARK',
                payload: responseAPI.data.result
            })
        } 

    }

    return(
        <>
            <Modal size='sm' show={showLogin} centered onHide={handleCloseLogin} className='rounded order-border'>
                <Modal.Body> 
                <Image className='cordinat-img sticky-top' src={cordinat}></Image>
                    <h2 className='text-red py-4 fw-bold text-center'>Login</h2>   
                    <Form onSubmit={handleLoginSubmit} >
                        <Form.Group>
                            <Form.Label for="email">
                                <h6 className='fw-bold form-label'>Email</h6>
                            </Form.Label>
                            <Form.Control type="email" name="email" id="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="password">
                                <h6 className='fw-bold form-label'>Password</h6>
                            </Form.Label>
                           <Form.Control type="password" name="password" id="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'> Login </Button>
                    </Form>
                    <p className='fw-bold text-center'>
                        <span className='opacity-50'>Dont have an account ? Klik</span>
                        <span className='fw-bold cursor-p opacity-75' onClick={()=>{handleCloseLogin(); activereg()}}> Here</span> 
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
