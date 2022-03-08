import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CardArticle from '../components/CardArticle'

export default function Bookmark() {
  return (
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
  )
}
