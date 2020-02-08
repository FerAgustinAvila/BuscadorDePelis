import React, { Component } from 'react'

// import { Title } from '../components/Title.jsx'
import { SearchForm } from '../components/SearchForm.jsx'
import { PelisList } from '../components/PelisList.jsx'

import './Home.css'

export class Home extends Component {
  state = { movieResults: [], userSearch: false }

  _handleResults = (results) => {
    this.setState({ movieResults: results, userSearch: true })
  }

  _renderResults() {
    console.log('movieResults', this.state.movieResults);
    return this.state.movieResults.length === 0
    ? <h6><span role="img" aria-label="sad face"> 😞 </span>  Intenta buscar otra película.</h6>
    : <PelisList movieResults={this.state.movieResults} />
  }


  render () {
    return (
      <section className="Home">
      <div className="Home__container">
        <div className="Home__form">
          <SearchForm onResults={this._handleResults}/>
        </div>
        <div className="Home__description">
          {
            this.state.userSearch
            ? this._renderResults()
            : <h6> Buscador de películas  
                <br/>
                <span className="nohover">
                    ( tambien series y algunos videos juegos )
                </span> 
              </h6>
          }
        </div>
        <div className="Home__credits">
          <p> Utilizando <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> para los resultados </p>
          <p><i>
            Agregame en <a href="https://www.linkedin.com/in/fernandoagustinavila/" target="_blank" rel="noopener noreferrer"> LinkedIn </a> 
            o mira mi repositorio en <a href="https://github.com/FerAgustinAvila" target="_blank" rel="noopener noreferrer">Github</a>
          </i></p>
        </div>
      </div>
    </section>
    )
  }
}