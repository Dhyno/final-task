import { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Image } from 'react-bootstrap'
import { UserContext, API, filterDate, filterTitle, DataContext} from '../export/exportComponent';
import { bookmarkIcon as bookmark, bookmarkAfter as afterBookmark } from '../export/exportImage'

export default function CardArticle( props ) {
  
  const { data } = props;
  const imgUrl=`http://localhost:5000/uploads/${data.image}`;
  
  const navigate= useNavigate();
  
  const [state, dispatch] = useContext(UserContext);
  const [dataState, dispatchData] = useContext(DataContext)
  
  const [imgBookmark, setImgBookmark] = useState(bookmark);
  
  const token= localStorage.getItem('token')
  const handleBookMark = async () => {
    if(imgBookmark==bookmark){

      setImgBookmark(afterBookmark);

      const dataId={idJourney: data.id};
      const body = JSON.stringify(dataId);

      const response=await API.post('/bookmark', body, { headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json"}})
      if(response.status==200){
        const responseAPI = await API.get('/bookmark',{headers: { "Authorization": `Bearer ${token}`} })
        dispatchData({ type: 'INIT_BOOKMARK', payload: responseAPI.data.result })
        alert('success add bookmark')
      }

    } else{

      setImgBookmark(bookmark)

      for(let i=0; i<dataState.bookmark.length; i++){
        if(dataState.bookmark[i].idJourney == data.id){
          const response = await API.delete(`/bookmark/${dataState.bookmark[i].id}`);
          console.log(response);
          if(response.status==200){
            const responseAPI = await API.get('/bookmark',{headers: { "Authorization": `Bearer ${token}`} })
            dispatchData({ type: 'INIT_BOOKMARK', payload: responseAPI.data.result })
            alert('success delete bookmark')
          }
        }
      }

    }

  }

  useEffect(()=> dataState.bookmark.map( databookmark => databookmark.idJourney == data.id  && setImgBookmark(afterBookmark) ) , [dataState.bookmark]);
  useEffect(()=> !state.isLogin && setImgBookmark(bookmark),[state.isLogin])

  return (
    <div className='pos-rel'>
      <Card className='galssmophism-active my-5'>
          <div  onClick={()=>navigate(`/detailjourney/${data.id}`)} className='card-image cursor-p' style= {{backgroundImage: `url(${imgUrl})`}} ></div>
          <Card.Body>
              <Card.Title className='fw-bold'>{filterTitle(data.title)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted fs-6 opacity-50">{filterDate(data.createdAt)}, {data.user.name}</Card.Subtitle>
              <Card.Text className='text-secondary select' dangerouslySetInnerHTML={{ __html: data.description }}></Card.Text>
              <Card.Text className='text-secondary dot'>...</Card.Text>
              <span onClick={()=>navigate(`/detailjourney/${data.id}`)} className='text-primary cursor-p'>More</span>
          </Card.Body>
      </Card>
      { ( state.isLogin && dataState.onHomePage ) && <Image onClick={handleBookMark} className='bookmark-img pos-ab' src={imgBookmark} /> }
    </div>
  )
}