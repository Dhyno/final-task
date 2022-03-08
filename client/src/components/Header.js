import React, { useState } from 'react'
import { Container, Navbar, Nav,Image } from 'react-bootstrap'
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'

import navIcon from '../assets/images/navbar/nav-icon.svg'
import navIconLogin from '../assets/images/navbar/nav-icon-login.svg'

export default function Header() {

    const [modalLogin, setModalLogin]=useState(false);
    const handleShowLogin = () => setModalLogin(!modalLogin);

    const [modalRegister, setModalRegister]=useState(false);
    const handleShowRegister = () => setModalRegister(!modalRegister);

  return (
    <Container fluid className='nav-style'>
        <Container>
            <Navbar className='mb-4'>
                <Navbar.Brand>
                    {/* <Image className='cursor-p' 
                        src={navIcon}>
                    </Image> */}
                    <Image className='cursor-p' 
                        src={navIconLogin}>
                    </Image>
                </Navbar.Brand>
                <Nav className="ms-auto d-flex align-items-center b-soft-blue">
                    <Nav.Link><button onClick={handleShowLogin} type="button" className="btn btn-outline-light rounded fw-bold text-red py-1 border-2 px-4 mx-2">Login</button></Nav.Link>
                    <Nav.Link><button onClick={handleShowRegister} type="button" className="btn btn btn-primary text-light rounded fw-bold py-1 px-4">Register</button></Nav.Link>
                </Nav>
            </Navbar>
        </Container>

        { modalLogin&& <ModalLogin deactive={handleShowLogin} activereg={handleShowRegister}/>}
        { modalRegister&& <ModalRegister deactive={handleShowRegister}/>}
    </Container>
  )
}
