import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-image">
          <img src={ `/crudflix/${movie.imagePath}` } alt="Movie poster" />
        </div>
        <p className="movie-card-title">
          { movie.title }
        </p>
        <p className="movie-card-storyline">
          { movie.storyline }
        </p>
        <div className="movie-card-details-button">
          <Link to={ `/movies/${movie.id}` }>MAIS INFORMAÇÕES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default MovieCard;
