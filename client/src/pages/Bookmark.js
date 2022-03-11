import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header/Header'
import CardArticle from '../components/CardArticle'
import { API } from '../config/api'

export default function Bookmark() {

    const [journey, setJourney] = useState([])

    const getData = async () => {
        const token= localStorage.getItem('token')
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,//decode token to get id that current login
            },
        };

        const response = await API.get('/bookmark',config);
        // console.log(response);
        let getAlljourney=response.data.result.map( data => data.journey);
        setJourney(getAlljourney);
    }

    useEffect( () => getData(), [] )
  return (
    <Container fluid className='px-5 py-5 bg-home'>
        <h2 className='fw-bold'>Bookmark</h2>
        <Row>
            {
                journey.map(  data  => ( <Col md={3}> <CardArticle data={data} key={data.id} /> </Col> ) )
            }
        </Row>
    </Container>
  )
}
