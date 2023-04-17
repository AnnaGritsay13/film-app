import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

import './movie.css'

// countries, genres


export default function Movie({ id, title, poster, rating, year, genres }) {

    return (
      <Card key={id} className="movie">
        <CardImg className="poster"
          alt="no poster"
          src={poster}
        />
        
    <CardBody className="info">
      <CardTitle tag="h4">
            { title.length > 30 ? `${title.slice(0, 29)}...` : title}
      </CardTitle>
      <CardText>
            {year} 
        </CardText>
          <CardText>
            {genres.join(', ')}
          </CardText>
          <div className="rating">
            {rating}
          </div>

          </CardBody>
          </Card>
    )
}