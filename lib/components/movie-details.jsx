import React, { Component } from "react";
import HttpWrapper from "../modules/http-wrapper";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.match.params.movie_id);
		HttpWrapper.getMovieDetails(
			this.props.match.params.movie_id
		).then(response => {
			console.log(response.data);
		});
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.match.params.movie_id);
	}
	render() {
		return <div>MovieDetails: {this.props.match.params.movie_id}</div>;
	}
}
export default MovieDetails;
