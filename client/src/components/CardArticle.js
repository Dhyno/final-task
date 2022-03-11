import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Image } from 'react-bootstrap'

import { UserContext } from '../context/userContext';

import { filterDate, filterTitle } from '../filterAndConvert/filterConvert'

import cardImage from '../assets/images/navbar/card-article.svg'
import bookmark from '../assets/images/navbar/Bookmark.svg'
import afterBookmark from '../assets/icons/card-component/bookmark-after.png'
import { DataContext } from '../context/dataContext';

import { Tilt, options } from '../config/Tilt';

export default function CardArticle( props ) {

  const { data, handleChange } = props;
  const imgUrl=`http://localhost:5000/uploads/${data.image}`;

  const navigate= useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const [dataState, dispatchData] = useContext(DataContext)

  const [imgBookmark, setImgBookmark] = useState(bookmark);

  const handleBookMark = () => {
    if(imgBookmark==bookmark){
      setImgBookmark(afterBookmark)
      handleChange(data.id, true )
    } else{
      setImgBookmark(bookmark)
      handleChange(data.id, false )
    }
  }

  useEffect(()=> dataState.bookmark.map( databookmark => databookmark.idJourney == data.id  && setImgBookmark(afterBookmark) ) , [dataState]);

  return (
    <Tilt options={options}>
      <div className='pos-rel'>
        <Card className='my-5'>
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
    </Tilt>
  )
}
