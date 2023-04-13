import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

import './movie.css'
// countries, genres


export default function Movie({id, title, poster, rating, year}) {
    return (
                    <Card className="movie">
            <CardImg className="poster"
      alt="Унесенные призраками"
      src={poster}
        />
        
    <CardBody className="info">
      <CardTitle tag="h4">
            {title}
      </CardTitle>
      <CardText>
            {year}, {rating}
        </CardText>
      <CardText>
        жанры
      </CardText>

          </CardBody>
          </Card>
    )
}