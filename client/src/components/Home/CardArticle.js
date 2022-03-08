import React from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import cardImage from '../../assets/images/navbar/card-article.svg'
import bookmark from '../../assets/images/navbar/Bookmark.svg'

export default function CardArticle() {
  return (
      <div className='pos-rel'>
        <Card className='my-4'>
            <Card.Img className='img-fluid w-full' variant="top" src={cardImage} />
            <Card.Body>
                <Card.Title className='fw-bold'>Dewata Bali</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-6 opacity-50">2 jun 2022, rino</Card.Subtitle>
                <Card.Text className='text-secondary'>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Image className='bookmark-img pos-ab' src={bookmark} />
    </div>
  )
}
