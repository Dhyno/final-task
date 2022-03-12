import { useContext } from 'react'
import { Row ,Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DataContext, UserContext } from '../../export/exportComponent'
import { bookmark, logout, newJourney, user } from '../../export/exportImage'

export default function PopData(props) {

    const [state, dispatch] = useContext(UserContext);
    const [dataState, dispatchData] = useContext(DataContext);

    const { closeModal } = props;
    const navigate=useNavigate();

    const handleLogout = () => {
        closeModal();
        navigate('/');
        dispatch({ type: "LOGOUT"})
        dispatchData({type: 'DELETE_BOOKMARK'})
    }

  return (
    <>
        <Row className="py-2 px-2 mb-2 d-flex align-items-center">
            <Col md={3}><Image className="pop-img" src={user}></Image></Col>
            <Col md={9}><h5 onClick={()=>{closeModal(); navigate('/profile')}} className="cursor-p fw-bold">Profile</h5></Col>
        </Row>
        <Row className="py-2 px-2 mb-2">
            <Col md={3}><Image className="pop-img" src={newJourney}></Image></Col>
            <Col md={9}><h5 onClick={()=>{closeModal(); navigate('newjourney')}} className="cursor-p fw-bold">New Journey</h5></Col>
        </Row>
        <Row className="py-2 px-2 mb-2 border-bottom border-2">
            <Col md={3}><Image className="pop-img" src={bookmark}></Image></Col>
            <Col md={9}><h5 onClick={()=>{closeModal(); navigate('/bookmark')}} className="cursor-p fw-bold">Bookmark</h5></Col>
        </Row>
        <Row>
            <Col md={3}><Image className="pop-img" src={logout}></Image></Col>
            <Col md={9} onClick={handleLogout} className="cursor-p fw-bold" ><h5>Logout</h5></Col>
        </Row>
    </>
  )
}
