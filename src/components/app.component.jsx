import React from "react";
import { connect } from "react-redux";

import { fetchPlanet } from "../actions/planets.actions";

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchPlanet();
  }

  render() {
    const { data, loading, error } = this.props.planet;
    return (
      <main>
        {error && <p>{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div>
              <h1>{data.name}</h1>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Climate:{" "}
                <span>
                  {data.climate &&
                    data.climate
                      .split(",")
                      .map(aClimate => capitalize(aClimate.trim()))
                      .join(", ")}
                </span>
              </p>
              <p>
                Terrain:{" "}
                <span>
                  {data.terrain &&
                    data.terrain
                      .split(",")
                      .map(aTerrain => capitalize(aTerrain.trim()))
                      .join(", ")}
                </span>
              </p>
              <p>
                Featured In <span>{data.filmsFeatured}</span> films
              </p>
            </div>

            <button onClick={this.props.fetchPlanet}>Next</button>
          </div>
        )}
      </main>
    );
  }
}

const capitalize = str => {
  const [firstLetter, ...rest] = str;
  return [firstLetter.toUpperCase(), ...rest].join("");
};

const mapStateToProps = ({ planet }) => ({ planet });

const mapDisptachToProps = dispatch => ({
  fetchPlanet: () => dispatch(fetchPlanet())
});

export default connect(mapStateToProps, mapDisptachToProps)(App);
