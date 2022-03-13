import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CardArticle, API, BookMarkEmpty } from '../export/exportComponent'

export default function Bookmark() {

  const [journey, setJourney] = useState([])

  const getData = async () => {
    const token= localStorage.getItem('token')

    const response = await API.get('/bookmark', { headers: { "Authorization": `Bearer ${token}`, } } );
    let getAlljourney=response.data.result.map( data => data.journey);
    setJourney(getAlljourney);
  }

  useEffect( () => getData(), [] )
  
  return (
    <Container fluid className='px-5 py-5 bg-home'>
        { journey.length<=0 ? ( <BookMarkEmpty /> )
            :<>
                <h2 className='fw-bold'>Bookmark</h2>
                <Row>
                    {
                        journey.map(  data  => ( <Col md={3}> <CardArticle data={data} key={data.id} /> </Col> ) )
                    }
                </Row>
            </>
        }
    </Container>
  )
}
