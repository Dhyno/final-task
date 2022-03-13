import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form,FormControl,Offcanvas,NavDropdown, Image, Popover, OverlayTrigger } from 'react-bootstrap'
import { ModalLogin, ModalRegister, PopData, UserContext } from '../../export/exportComponent'
import { navIcon, navIconLogin, } from '../../export/exportImage'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export default function Header() {

    const navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext)

    let ref = useRef(null);

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
        <Navbar variant="light" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Brand>
                    <Image onClick={()=>navigate('/')} className='cursor-p' 
                        src={ state.isLogin ? navIconLogin : navIcon }>
                    </Image>
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center b-soft-blue">
                        { state.isLogin ?
                            <OverlayTrigger 
                                show={showPop} 
                                trigger='click'  
                                placement="bottom" 
                                overlay={popover}
                                rootClose={true}
                                onHide={() => setPop(false)}
                            >
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
        { modalLogin&& <ModalLogin deactive={handleShowLogin} activereg={handleShowRegister}/>}
        { modalRegister&& <ModalRegister deactive={handleShowRegister}/>}
    </Container>
  )
}

// const PopoverCustom = () => {
//     let ref = React.useRef(null);
  
//     const popover = (
//       <Popover id="popover-basic">
//         {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
//         <Popover.Content>
//           And here's some <strong>amazing</strong> content. It's very engaging.
//           right?
//           <div className="mt-3 mb-1">
//             <Button
//               onClick={() => ref.handleHide()}
//               size="sm"
//               variant="outline-dark"
//               className="pt-0 pb-0"
//             >
//               Hide Popover
//             </Button>
//           </div>
//         </Popover.Content>
//       </Popover>
//     );
  
//     return (
//       <OverlayTrigger
//         ref={r => (ref = r)}
//         container={ref.current}
//         trigger="click"
//         placement="auto"
//         overlay={popover}
//         rootClose
//       >
//         <Button variant="dark">Show popover</Button>
//       </OverlayTrigger>
//     );
//   };