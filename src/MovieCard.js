import React from 'react';
import './MovieCard.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function MovieCard() {

    const cardInfo =  [
        {
            image: "https://themarketingbirds.com/wp-content/uploads/2021/04/Lemony-Snickets-Series-of-Unfortunate-Events.jpg",
            title: "fast and furious 10",
            text: "The best of all time"
        }
    ];

     const renderCard = (card, index) => {
         return(
            <Card style={{ width: '18rem'}}  key = {index} className="card" >
            <Card.Img  variant="top" src={Card.Img} />
              <Card.Body>
                 <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                  {card.text}
                 </Card.Text>
                 <Button variant="primary">
                 <Card.Link href="#"></Card.Link>
    
                     Update</Button>
             </Card.Body>
          </Card>
         )
     }

    return (
    <div className='card__grid'>
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default MovieCard