import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CardArticle from '../components/Home/CardArticle'

import defaultUser from '../assets/images/navbar/default-user.png'

export default function Profile() {
  return (
    <Container fluid className='px-5 py-5 bg-home'>
        <h2 className='fw-bold'>Profile</h2>
        <div>
            <Row className='text-center mt-5 mb-2'>
                <Col>
                    <img className='profile-img rounded-circle' src={defaultUser} />
                </Col>
                <h2 className='fw-bold'>Rino Saputra</h2>
                <h6 className='text-secondary'>rinosaputra133@gmail.com</h6>
            </Row>
        </div>
        <Row>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
            <Col md={3}>
                <CardArticle />
            </Col>
        </Row>
    </Container>
  )
}
