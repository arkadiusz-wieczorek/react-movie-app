import React, { Component } from "react";
import MoviesListElement from "./list-element.jsx";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.sortMoviesByTitle}>
					Sort movies
				</button>
				<button onClick={this.props.moveToPage.bind(this, false)}>
					Prev page
				</button>
				<button onClick={this.props.moveToPage.bind(this, true)}>
					Next page
				</button>
				{this.props.is_loading
					? <div>MoviesList: is loading</div>
					: <ul>
							{this.props.movies.map(movie => (
								<MoviesListElement movie={movie} key={movie.id} />
							))}
						</ul>}
			</div>
		);
	}
}
export default MoviesList;
