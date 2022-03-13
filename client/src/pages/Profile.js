import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CardArticle, API, UserContext, ProfileEmpty } from '../export/exportComponent'

export default function Profile() {
    
  const [state, dispatch] = useContext(UserContext);
  const [journey, setJourney] = useState([])


  const getData = async () => {
    
    const token= localStorage.getItem('token')
    const response = await API.get('/userjourney', { headers: { "Authorization": `Bearer ${token}` } } );
    setJourney(response.data.result);
  }

  useEffect( () => getData(), [] )

  return (
    <Container fluid className='px-5 py-5 bg-home'>
        <h2 className='fw-bold'>Profile</h2>
        <div className='mb-5'>
            <Row className='text-center mt-5 mb-2'>
                <Col>
                    <img className='profile-img rounded-circle' src={state.user.image} />
                </Col>
                <h2 className='fw-bold'>{state.user.name}</h2>
                <h6 className='text-secondary'>{state.user.email}</h6>
            </Row>
        </div>
        <Row>
            { journey.length<=0 ? ( <ProfileEmpty /> ) 
              :
              journey.map(  data  => ( <Col md={3}> <CardArticle data={data} key={data.id} /> </Col> ) )
            }
        </Row>
    </Container>
  )
}
