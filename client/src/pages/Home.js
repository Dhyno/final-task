import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CardArticle from '../components/Home/CardArticle'

export default function Home() {
  return (
    <>
        <Container fluid className="nav-bg text-light">
            <Header />
            <Container>
                <div className='py-2'>
                    <h1 className='fs-1-1'>The Journey </h1>
                    <h1 className='fs-1-1'>you ever dreamed of.</h1>
                    <p className='fs-6 opacity-75 w-50'>We made a tool so you can easily keep & share your travel memories.But there is a lot more</p>
                </div>
            </Container>
        </Container>
        <Container fluid className='px-5 py-5 bg-home'>
            <h2 className='fw-bold'>Journey</h2>
            <div className='row g-0 mt-4 mx-4'>
                <div className='col-md-10'>
                    <input type="text" placeholder='Find Journey' className='form-control border-0'/>
                </div>
                <div className='col-md-2'>
                    <div className='btn btn-primary px-3'>Seacrh</div>
                </div>
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
    </>
  )
}
