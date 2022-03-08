import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CardArticle from '../components/Home/CardArticle'

export default function Bookmark() {
  return (
    <div className='bg-home'>
        <Header />
        <Container fluid className='px-5 py-5 bg-home'>
            <h2 className='fw-bold'>Bookmark</h2>
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
    </div>
  )
}
