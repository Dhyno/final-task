import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Header, CardArticle, UserContext, API, DataContext, ServerError } from '../export/exportComponent'

export default function Home() {
    
    const navigate=useNavigate();

    const [state, dispatch] = useContext(UserContext);
    const [dataState, dispatchData] = useContext(DataContext);

    const [journey, setJourney] = useState([])
    const [searchTitle, setSeacrchTiltle]= useState('');
    const [iseError, setIsError] = useState(false);

    const getData =  () =>  API.get('/journey') .then( res=>setJourney(res.data.result)) .catch(err=> setIsError(true));

    useEffect( () => { 
        getData();  
        dispatchData({type: "ON_HOME"});
        return  () =>  dispatchData({type: "NOT_ON_HOME"}); 
    } , [] )

  return (
    <>
        { iseError ? ( <ServerError /> ) : <>
            { !state.isLogin &&
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
                        <input onChange={(e)=>setSeacrchTiltle(e.target.value)} type="text" placeholder='Find Journey' className='form-control my-2 border-0'/>
                    </div>
                    <div className='col-md-2 my-2 md-center'>
                        <div className='btn btn-primary px-3'>Seacrh</div>
                    </div>
                </div>
                <Row>
                    { journey.filter( list => list.title.toLowerCase().includes(searchTitle.toLowerCase()) )
                        .map(  data  => ( 
                            <Col lg={3}> 
                                <CardArticle data={data} key={data.id} /> 
                            </Col> )
                        ) 
                    }
                </Row>
            </Container>
        </>
        }
    </>
  )
}
