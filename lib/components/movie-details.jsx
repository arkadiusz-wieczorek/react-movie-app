import React, { Component } from "react";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.poster_path}</li>
					<li>{this.props.id}</li>
					<li>{this.props.title}</li>
					<li>{this.props.release_date}</li>
					<li>{this.props.vote_count}</li>
					<li>{this.props.vote_average}</li>
					<li>{this.props.overview}</li>
					<li>{this.props.genres}</li>
					<li>{this.props.production_countries}</li>
					<li>{this.props.production_countries}</li>

				</ul>

			</div>
		);
	}
}
export default MovieDetails;
