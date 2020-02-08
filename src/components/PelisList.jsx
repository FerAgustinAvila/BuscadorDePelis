import React, { Component } from "react";
import PropTypes from "prop-types";
import { Peli } from "./Peli.jsx";

import '../pages/Home.css'

export class PelisList extends Component {
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movieResults } = this.props;
    return (
      <div className="Home__results">
        {
          movieResults.map(movie => {
            return (
              <Peli
                key={`${movie.imdbID}${movie.Title}`}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
              />
            )
          })
        }
      </div>
    );
  }
}