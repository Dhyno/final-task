import React, { useContext, useState, useEffect, Fragment, useRef } from 'react'
import { Container, Row, Col, OverlayTrigger, Tooltip,} from 'react-bootstrap'
import { CardArticle, API, UserContext, ProfileEmpty, EditImageProfile } from '../export/exportComponent'
import { pen, camera } from '../export/exportImage'

export default function Profile() {
    
  const [state, dispatch] = useContext(UserContext);
  const [journey, setJourney] = useState([])

  const [style, setStyle]=useState({
    backgroundColor: '#e5e5e5',
    showEdit: false,
    inputValue: '',
    placeHolder: 'Type here',
    tipNotif: 'name must more 5 character'
  })

  const handleChange = (e) => {
    let value = e.target.value;
    if(e.which==0x0D){
      if(value.length < 5){
        e.target.value='';
        let message='name must more 5 character'
        return setStyle({...style, placeHolder: message, tipNotif: message})
      } else {
        value=value.toLowerCase();
        let isValid = true;
        [...value].map( e  =>  !(e >="a" && e<="z") ? isValid=false : console.log('catch'));
        if(isValid){
          console.log('sen api')
        } else {
          e.target.value='';
          return setStyle({...style, placeHolder: 'invalid character', tipNotif: 'symbol number not allow'})
        }
      }
      setStyle({
        backgroundColor: '#e5e5e5',
        showEdit: false,
        inputValue: '',
        placeHolder: 'Type here',
        tipNotif: 'name must more 5 character'
      })
    }
  }

  const [showEditImage, setShowEditImage]=useState(false);

  const getData = async () => {
    
    const token= localStorage.getItem('token')
    const response = await API.get('/userjourney', { headers: { "Authorization": `Bearer ${token}` } } );
    setJourney(response.data.result);
  }

  useEffect( () => getData(), [] )

  return (
    <Container fluid className='px-5 py-5 bg-home' style={{backgroundColor: style.backgroundColor}}>
        <h2 className='fw-bold'>Profile</h2>
        <div className='mb-5 text-center'>
            <Row className='d-flex justify-content-center mt-5 mb-2'>
              <Col md={2} className='cnt-img-profile'>
                  <img className='profile-img' src={state.user.image} />
                  <div onClick={()=>setShowEditImage(true)} className='edit-profile-img cursor-p'>
                    <img style={{width: 20}} src={camera}/>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center mb-2 align-items-center'>
                { style.showEdit ?
                  <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={
                    <Tooltip id="button-tooltip">{style.tipNotif}</Tooltip>}
                  >
                    <input onKeyPress={handleChange} onFocus={()=>setStyle({...style, backgroundColor: 'black'})} className='inp-profile' type='text' placeholder={style.placeHolder}/> 
                  </OverlayTrigger>
                  :
                  <>
                    <h2 onClick={()=>setStyle({...style, showEdit: true})} className='fw-bold my-4 profile-name cursor-p'>{state.user.name}</h2>
                    <img onClick={()=>setStyle({...style, showEdit: true})} className='pen ms-2 cursor-p' src={pen}/>
                  </> 
                }
              </Col>
            </Row>
            <h6 className='text-secondary'>{state.user.email}</h6>
        </div>
        <Row>
            { journey.length<=0 ? ( <ProfileEmpty /> ) 
              :
              journey.map(  data  => ( <Col md={3}> <CardArticle data={data} key={data.id} /> </Col> ) )
            }
        </Row>
        { showEditImage && <EditImageProfile closeModal={()=>setShowEditImage(!showEditImage)}/>}
    </Container>
  )
}

//https://www.npmjs.com/package/react-avatar-editor
//https://blog.logrocket.com/top-react-image-cropping-libraries/
