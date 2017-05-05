import React, { Component } from "react";
import HttpWrapper from "../modules/http-wrapper";
import MovieDetails from "./movie-details.jsx";

class MovieDetailsWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			poster_path: "",
			id: this.props.match.params.movie_id,
			title: "",
			release_date: "",
			vote_count: null,
			vote_average: null,
			overview: "",

			genres: [],
			production_countries: [],
			production_companies: [],
		};
	}

	getMovie() {
		for (var m in this.props.movies) {
			if (this.props.movies[m].id == this.state.id)
				return this.props.movies[m];
		}
		return null;
	}

	mergeObjectWithState(obj) {
		let movie_state = this.state;

		Object.keys(obj)
			.filter(key => key in movie_state)
			.forEach(key => (movie_state[key] = obj[key]));

		return movie_state;
	}
	componentDidMount() {
		let merged_object, movie = this.getMovie();
		if (movie !== null) {
			merged_object = this.mergeObjectWithState(movie);
			this.setState({ merged_object });
		}

		HttpWrapper.getMovieDetails(this.state.id).then(response => {
			merged_object = this.mergeObjectWithState(response.data);
			this.setState({ merged_object });
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState !== this.state) return true;
		else return false;
	}

	render() {
		return (
			<div>
				MoviesDetailsWrapper
				<MovieDetails movie={this.state} />
			</div>
		);
	}
}
export default MovieDetailsWrapper;
