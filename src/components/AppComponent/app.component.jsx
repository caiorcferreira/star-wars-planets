import React from "react";
import { connect } from "react-redux";

import "./app.component.scss";
import { fetchPlanet } from "../../actions/planets.actions";

import Loader from "../Loader/loader.component";

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchPlanet();
  }

  render() {
    const { data, loading, error } = this.props.planet;
    return (
      <main className="container">
        <h1 className="title">Star Wars Planets</h1>
        <div className={"box" + (loading ? " center" : "")}>
          {error && <p>{error}</p>}
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="planet-info">
                <h2 className="planet-info__name">{data.name}</h2>
                <hr />
                <p className="planet-info__population">
                  Population: <span>{data.population}</span>
                </p>
                <p className="planet-info__climate">
                  Climate:{" "}
                  <span>
                    {data.climate &&
                      data.climate
                        .split(",")
                        .map(aClimate => capitalize(aClimate.trim()))
                        .join(", ")}
                  </span>
                </p>
                <p className="planet-info__terrain">
                  Terrain:{" "}
                  <span>
                    {data.terrain &&
                      data.terrain
                        .split(",")
                        .map(aTerrain => capitalize(aTerrain.trim()))
                        .join(", ")}
                  </span>
                </p>
                <p className="planet-info__filmsFeatured">
                  Featured In <span>{data.filmsFeatured}</span> films
                </p>
              </div>

              <div className="center">
                <button
                  className="planet-info__button"
                  onClick={this.props.fetchPlanet}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
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
