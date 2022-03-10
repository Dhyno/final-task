import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Image } from 'react-bootstrap'

import { filterDate, filterTitle } from '../filterAndConvert/filterConvert'

import cardImage from '../assets/images/navbar/card-article.svg'
import bookmark from '../assets/images/navbar/Bookmark.svg'

export default function CardArticle( props ) {
  const { data } = props;
  const imgUrl=`http://localhost:5000/uploads/${data.image}`;

  const navigate= useNavigate();
  
  // let root = parse(data.description);

  return (
      <div className='pos-rel'>
        <Card className='my-4'>
            {/* <Card.Img className='img-fluid w-full' variant="top" src={imgUrl+data.image} /> */}
            <div className='card-image' style= {{backgroundImage: `url(${imgUrl})`}} ></div>
            <Card.Body>
                <Card.Title className='fw-bold'>{filterTitle(data.title)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-6 opacity-50">{filterDate(data.createdAt)}, {data.user.name}</Card.Subtitle>
                <Card.Text className='text-secondary select' dangerouslySetInnerHTML={{ __html: data.description }}></Card.Text>
                <Card.Text className='text-secondary dot'>...</Card.Text>
                <span onClick={()=>navigate(`/detailjourney/${data.id}`)} className='text-primary cursor-p'>More</span>
            </Card.Body>
        </Card>
        <Image className='bookmark-img pos-ab' src={bookmark} />
    </div>
  )
}
