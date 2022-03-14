import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { API, Header, filterDate, UserContext} from '../export/exportComponent';

export default function DetailJourney() {
  
  const imgUrl='http://localhost:5000/uploads/';

  const id=useParams().id
  
  const [state, dispatch] = useContext(UserContext)

  const imgElement = useRef(null)
  const [styleImg, setStyleImg]=useState();
  const handleImgRender = () => imgElement.current.naturalHeight>890 ? setStyleImg(670) : setStyleImg("100%");

  const [stateJourney, setStateJourney] = useState(null)
  const getData = async () => {
        const response=await API.get(`/journey/${id}`)
        console.log(response);
        const data=response.data.result;
        setStateJourney(data);
  }

  useEffect( async () =>getData(),[])

  return (
    <>
      {!state.isLogin && <Header />}
      {stateJourney &&
        <Container className='px-sm py-2 bg-home'>
            <Row className='d-flex align-items-center justify-content-between py-5'>
                <Col md={9}>   
                  <h2 className='fw-bold'>{stateJourney.title}</h2>
                </Col>
                <Col md={2} class="d-flex align-items-center justify-content-end">
                  <span className='fs-5 fw-bold me-2'>{stateJourney.user.name}</span>
                  <img className='user-header-img rounded-circle' src={imgUrl+stateJourney.user.image}/>
                </Col>
                <h6 className='text-primary mt-4'>{filterDate(stateJourney.createdAt)}</h6>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col className='text-center'>
                  <img style={{width: styleImg}} className='img-fluid' src={imgUrl+stateJourney.image} 
                    onLoad={handleImgRender}
                    ref={imgElement}
                  />   
              </Col>
            </Row>
            <Row className='mt-5 text-secondary bg-home t-align-justify' dangerouslySetInnerHTML={{ __html: stateJourney.description }} >
            </Row>          
        </Container>
      }
    </>
  )
}
