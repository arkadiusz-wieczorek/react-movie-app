import React, { Component } from "react";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.movie.poster_path}</li>
					<li>{this.props.movie.id}</li>
					<li>{this.props.movie.title}</li>
					<li>{this.props.movie.release_date}</li>
					<li>{this.props.movie.vote_count}</li>
					<li>{this.props.movie.vote_average}</li>
					<li>{this.props.movie.overview}</li>
					<li>{JSON.stringify(this.props.movie.genres)}</li>
					<li>
						{JSON.stringify(this.props.movie.production_countries)}
					</li>
					<li>
						{JSON.stringify(this.props.movie.production_companies)}
					</li>

				</ul>

			</div>
		);
	}
}
export default MovieDetails;
