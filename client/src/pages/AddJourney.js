import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AddJourney() {
  return (
    <Container className='px-5 py-5 bg-home'>
        <Row className='d-flex justify-content-start align-items-center py-5'>
            <Col md={10}>
                <h2 className='fw-bold'>New Journey</h2>
            </Col>
        </Row>
    </Container>
  )
}
