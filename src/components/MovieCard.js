import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import Rate from './Rate'
const MovieCard = ({movie}) => {
  return (
    <div style={{width:'330px' ,padding :'10px',marging:'3px',borderStyle:'groove'}}>
      <Card style = {{ height: '500px'}}>
      <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardImg width='100%' height='300px'
            top
            src={movie.posterUrl}
            alt="Card image cap" />
        <CardBody>
          <CardText>{movie.description}</CardText>
          <div><Rate rating={movie.rate}/></div>
        </CardBody>
      </Card>
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}
export default MovieCard;