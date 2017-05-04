import React, { Component } from "react";
import HttpWrapper from "../modules/http-wrapper";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
		// https://www.themoviedb.org/movie/204968
		this.state = {
			genres: [],
			link: "",
			overview: "",
			production_countries: [],
			production_companies: [],
		};
	}
	componentDidMount() {
		console.log(this.props.match.params.movie_id);
		HttpWrapper.getMovieDetails(
			this.props.match.params.movie_id
		).then(response => {
			this.setState({
				genres: response.data.genres,
				link: `https://www.themoviedb.org/movie/${response.data.id}`,
				overview: response.data.overview,
				production_countries: response.data.production_countries,
				production_companies: response.data.production_companies,
			});
		});
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.match.params.movie_id);
	}
	shouldComponentUpdate(nextProps, nextState) {
		nextState !== this.state ? true : false;
	}
	render() {
		return (
			<div>
				<p>MovieDetails: {this.props.match.params.movie_id}</p>
				<div>{JSON.stringify(this.state)}</div>
				<a href={this.state.link}>{this.state.link}</a>
			</div>
		);
	}
}
export default MovieDetails;
