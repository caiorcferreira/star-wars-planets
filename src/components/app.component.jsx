import React from "react";
import { connect } from "react-redux";

import { fetchPlanet } from "../actions/planets.actions";

export class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>{this.props.planet.name}</h1>
          <p>
            Population: <span>{this.props.planet.population}</span>
          </p>
          <p>
            Climate: <span>{this.props.planet.climate}</span>
          </p>
          <p>
            Terrain: <span>{this.props.planet.terrain}</span>
          </p>
          <p>
            Featured In <span>{this.props.planet.filmsFeatured}</span> films
          </p>
        </div>

        <button onClick={this.props.fetchPlanet}>Next</button>
      </main>
    );
  }
}

const mapStateToProps = ({ planet }) => ({ planet });

const mapDisptachToProps = dispatch => ({
  fetchPlanet: () => dispatch(fetchPlanet())
});

export default connect(mapStateToProps, mapDisptachToProps)(App);
