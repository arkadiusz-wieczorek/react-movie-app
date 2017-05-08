import React, { Component } from "react";
import MoviesListElement from "./movie-list-element.jsx";
import ButtonsContainer from "./buttons-container.jsx";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ width: "100%" }}>
				{this.props.movies.length > 0
					? <ButtonsContainer
							moveToPage={this.props.moveToPage}
							sortMoviesByTitle={this.props.sortMoviesByTitle}
							metadata={this.props.metadata}
							sorted={this.props.sorted}
							loaded={this.props.loaded}
						/>
					: null}
				{!this.props.loaded
					? <div className="loading-circle" />
					: <ul className="list">
							{this.props.movies.map(movie => (
								<MoviesListElement movie={movie} key={movie.id} />
							))}
						</ul>}
				{this.props.movies.length > 0
					? <ButtonsContainer
							moveToPage={this.props.moveToPage}
							sortMoviesByTitle={this.props.sortMoviesByTitle}
							metadata={this.props.metadata}
							sorted={this.props.sorted}
							loaded={this.props.loaded}
						/>
					: null}
			</div>
		);
	}
}
export default MoviesList;
