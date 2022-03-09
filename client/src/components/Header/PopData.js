import React from 'react'
import { Row ,Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import bookmark from '../../assets/icons/pop/bookmark.svg'
import logout from '../../assets/icons/pop/logout.svg'
import newJourney from '../../assets/icons/pop/new-journey.svg'
import user from '../../assets/icons/pop/user.svg'

export default function PopData(props) {

    const { closeModal } = props;
    const navigate=useNavigate();

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
            <Col md={9} onClick={closeModal} className="cursor-p fw-bold" ><h5>Logout</h5></Col>
        </Row>
    </>
  )
}
