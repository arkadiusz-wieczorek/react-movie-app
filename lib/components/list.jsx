import React, { Component } from "react";
import MoviesListElement from "./list-element.jsx";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
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
