import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { API } from '../config/api';

import { filterDate } from '../filterAndConvert/filterConvert';

import mainImage from '../assets/images/navbar/card-article.svg'

export default function DetailJourney() {
  
  const imgUrl='http://localhost:5000/uploads/';

  const id=useParams().id
  
  const imgElement = useRef(null)
  const [styleImg, setStyleImg]=useState();
  const handleImgRender = () => imgElement.current.naturalHeight>1000 ? setStyleImg(670) : setStyleImg("100%");

  const [stateJourney, setStateJourney] = useState(null)
  const getData = async () => {
        const response=await API.get(`/journey/${id}`)
        console.log(response);
        const data=response.data.result;
        setStateJourney(data);
        // setStateJourney({title: data.title, author: data.user.name, date: filterDate(data.createdAt),
        // image: data.image, description: data.description})
  }
  useEffect( async () =>getData(),[])

  return (
    <>
      {stateJourney &&
        <Container className='px-5 py-5 bg-home'>
            <Row className='d-flex align-items-center py-5'>
                <Col md={9}>   
                    <h2 className='fw-bold'>{stateJourney.title}</h2>
                </Col>
                <Col md={2} className='text-end'>
                    <h6 className='fs-5'>{stateJourney.user.name}</h6>
                </Col>
                <Col md={1}>
                  <img className='user-header-img rounded-circle' src={imgUrl+stateJourney.user.image}/>
                </Col>
                <h6 className='text-primary'>{filterDate(stateJourney.createdAt)}</h6>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col className='text-center'>
                    <img style={{width: styleImg}} className='img-fluid' src={`http://localhost:5000/uploads/${stateJourney.image}`} 
                      onLoad={handleImgRender}
                      ref={imgElement}
                    />   
                </Col>
            </Row>
            <Row className='mt-5 text-secondary bg-home' dangerouslySetInnerHTML={{ __html: stateJourney.description }} >
            </Row>
                
        </Container>
      }
    </>
  )
}
