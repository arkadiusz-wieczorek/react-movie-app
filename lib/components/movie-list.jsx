import React, { Component } from "react";
import MoviesListElement from "./movie-list-element.jsx";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ width: "100%" }}>
				{this.props.movies.length > 0
					? <div className="buttons-container">
							<button
								disabled={
									this.props.metadata.page == 1 ||
										!this.props.loaded
								}
								onClick={this.props.moveToPage.bind(this, -1)}
							>
								↤
							</button>
							<button
								disabled={this.props.sorted}
								onClick={this.props.sortMoviesByTitle}
							>
								⇅
							</button>

							<button
								disabled={
									this.props.metadata.page ==
										this.props.metadata.total_pages ||
										!this.props.loaded
								}
								onClick={this.props.moveToPage.bind(this, 1)}
							>
								↦
							</button>
						</div>
					: null}

				{!this.props.loaded
					? <div className="loading-circle" />
					: <ul className="list">
							{this.props.movies.map(movie => (
								<MoviesListElement movie={movie} key={movie.id} />
							))}
						</ul>}
			</div>
		);
	}
}
export default MoviesList;
