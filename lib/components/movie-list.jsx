import React, { Component } from "react";
import MoviesListElement from "./movie-list-element.jsx";
import ButtonsContainer from "./buttons-container.jsx";
import NotFoundPage from "./not-found-page.jsx";

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
							order={this.props.order}
							loaded={this.props.loaded}
						/>
					: null}
				{!this.props.loaded
					? <div className="loading-circle" />
					: this.props.metadata.total_results !== 0
							? <ul className="list">
									{this.props.movies.map(movie => (
										<MoviesListElement
											movie={movie}
											key={movie.id}
										/>
									))}
								</ul>
							: <NotFoundPage error_text="No results. Try with another query." />}
				{this.props.movies.length > 0
					? <ButtonsContainer
							moveToPage={this.props.moveToPage}
							sortMoviesByTitle={this.props.sortMoviesByTitle}
							metadata={this.props.metadata}
							order={this.props.order}
							loaded={this.props.loaded}
						/>
					: null}
			</div>
		);
	}
}
export default MoviesList;
