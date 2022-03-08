import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import mainImage from '../assets/images/navbar/card-article.svg'

export default function DetailJourney() {
  return (
    <Container className='px-5 py-5 bg-home'>
        <Row className='d-flex justify-content-start align-items-center py-5'>
            <Col md={10}>
                <h2 className='fw-bold'>Bersemayam di tanah DewataBersemayam di tanah Dewata</h2>
            </Col>
            <Col className='text-end'>
                <h6>Rino Saputra</h6>
            </Col>
            <h6 className='text-primary'>12 june 2022</h6>
        </Row>
        <Row>
            <Col>
                <img className='lrg-img' src={mainImage} />   
            </Col>
        </Row>
        <Row className='mt-5 text-secondary'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur accusamus odio magnam deserunt libero, quos voluptas, eum perferendis rem doloremque soluta minima iste odit similique nemo omnis dolor molestias nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque deleniti voluptate facere repudiandae hic ea eligendi accusamus temporibus aliquid perspiciatis repellendus ducimus doloremque dolorem corporis, obcaecati non veniam! Laboriosam.
            </p>
            <Col md={6}>
                <h4 className='fw-bold text-dark'>Bersemayam di tanah DewataBersemayam di tanah Dewata ke dua</h4>
            </Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae, recusandae voluptas modi, fugiat autem ducimus illum cum est animi voluptatibus optio repellat tempora qui iusto similique atque alias velit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex voluptate natus assumenda optio minima, nostrum sequi ducimus nobis aperiam iusto animi in ad dolore. Voluptatem possimus harum perspiciatis saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi minus laborum porro quam beatae illum hic, odio facere vero. Consectetur voluptates quas ad maiores tempora explicabo architecto esse. Natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum repellendus dolorem architecto dolore culpa expedita cumque qui maiores accusamus, perferendis explicabo optio natus dolor quaerat! Tempore repellendus reprehenderit doloribus.
            </p>
        </Row>
            
    </Container>
  )
}
