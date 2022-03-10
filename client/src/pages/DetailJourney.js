import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { API } from '../config/api';

import { filterDate } from '../filterAndConvert/filterConvert';

import mainImage from '../assets/images/navbar/card-article.svg'

export default function DetailJourney() {
  
  const id=useParams().id

  const [stateJourney, setStateJourney] = useState({})

  const getData = async () => {
        const response=await API.get(`/journey/${id}`)
        console.log(response);
        const data=response.data.result;
        setStateJourney({title: data.title, author: data.user.name, date: filterDate(data.createdAt),
        image: data.image, description: data.description})
  }

  useEffect( async () =>{
    getData();
    // console.log(response);
    // setData(response.data)
  },[])

  return (
    <Container className='px-5 py-5 bg-home'>
        {/* <h1> {stateJourney.title}</h1> */}
        <Row className='d-flex justify-content-start align-items-center py-5'>
            <Col md={10}>   
                <h2 className='fw-bold'>{stateJourney.title}</h2>
            </Col>
            <Col className='text-end'>
                <h6>{stateJourney.author}</h6>
            </Col>
            <h6 className='text-primary'>{stateJourney.date}</h6>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col md={6}>
                <img className='lrg-img' src={`http://localhost:5000/uploads/${stateJourney.image}`} />   
            </Col>
        </Row>
        <Row className='mt-5 text-secondary bg-home' dangerouslySetInnerHTML={{ __html: stateJourney.description }} >
        </Row>
            
    </Container>
  )
}
