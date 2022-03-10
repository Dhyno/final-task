import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header/Header'
import CardArticle from '../components/CardArticle'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { API } from '../config/api'

export default function Home() {
    
    const navigate=useNavigate();

    const [state, dispatch] = useContext(UserContext);

    const [journey, setJourney] = useState([])

    
    const getData = async () => {
        const response = await API.get('/journey');
        console.log(response);
        setJourney(response.data.result);
    }

    useEffect( () => getData(), [] )

  return (
    <>
        {
            !state.isLogin &&
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
        }
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
                {
                    journey.map(  data  => ( <Col md={3}> <CardArticle data={data} key={data.id} /> </Col> ) )
                }
            </Row>
        </Container>
    </>
  )
}
