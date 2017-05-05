import React, { Component } from "react";
import MoviesListElement from "./list-element.jsx";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button
					disabled={this.props.sorted}
					onClick={this.props.sortMoviesByTitle}
				>
					Sort movies
				</button>

				<button
					disabled={
						this.props.metadata.page == 1 || !this.props.loaded
					}
					onClick={this.props.moveToPage.bind(this, -1)}
				>
					Prev page
				</button>
				<button
					disabled={
						this.props.metadata.page ==
							this.props.metadata.total_pages ||
							!this.props.loaded
					}
					onClick={this.props.moveToPage.bind(this, 1)}
				>
					Next page
				</button>
				{!this.props.loaded
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
