import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Image, Popover, OverlayTrigger } from 'react-bootstrap'
import { ModalLogin, ModalRegister, PopData, UserContext } from '../../export/exportComponent'
import { navIcon, navIconLogin, } from '../../export/exportImage'

export default function Header() {

    const navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext)

    const [modalLogin, setModalLogin]=useState(false);
    const handleShowLogin = () => setModalLogin(!modalLogin);

    const [modalRegister, setModalRegister]=useState(false);
    const handleShowRegister = () => setModalRegister(!modalRegister);

    const [showPop, setPop] = useState(false)
    const handleShowToolTip = () => setPop(!showPop)

    const [styleCondition, setStyleCondition]=useState('');

    useEffect( () => state.isLogin ? setStyleCondition('nav-style-user') : setStyleCondition('nav-style-guest'), [] )

    const popover = (
        <Popover id='popover-positioned-bottom'>
          <Popover.Body>
            <PopData closeModal={handleShowToolTip}/>
          </Popover.Body>
        </Popover>
    );

  return (
    <Container fluid className={styleCondition}>
        <Container>
            <Navbar className='mb-4'>
                <Navbar.Brand>
                    <Image onClick={()=>navigate('/')} className='cursor-p' 
                        src={ state.isLogin ? navIconLogin : navIcon }>
                    </Image>
                </Navbar.Brand>
                <Nav className="ms-auto d-flex align-items-center b-soft-blue">
                    { state.isLogin ?
                        <OverlayTrigger show={showPop} trigger='click' placement="bottom" overlay={popover}>
                            <Nav.Link>
                                <img className="user-header-img rounded-circle" src={state.user.image} onClick={handleShowToolTip} />
                            </Nav.Link>
                        </OverlayTrigger>
                        :
                        <>
                            <Nav.Link><button onClick={handleShowLogin} type="button" className="btn btn-outline-light rounded fw-bold text-red py-1 border-2 px-4 mx-2">Login</button></Nav.Link>
                            <Nav.Link><button onClick={handleShowRegister} type="button" className="btn btn btn-primary text-light rounded fw-bold py-1 px-4">Register</button></Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar>
        </Container>
        { modalLogin&& <ModalLogin deactive={handleShowLogin} activereg={handleShowRegister}/>}
        { modalRegister&& <ModalRegister deactive={handleShowRegister}/>}
    </Container>
  )
}
