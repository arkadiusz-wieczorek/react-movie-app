import React, { Component } from "react";
import HttpWrapper from "../modules/http-wrapper";

export default function(MovieDisplayComponent) {
	return class MovieDetailsWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				poster_path: "",
				title: "",
				release_date: "",
				popularity: null,
				vote_count: null,
				vote_average: null,
				overview: "",
				imdb_id: null,

				genres: [],
				production_countries: [],
				production_companies: [],

				loaded: false,
			};
		}

		getMovieId() {
			return this.props.match.params.movie_id;
		}

		selectMovie() {
			for (var m in this.props.movies) {
				if (this.props.movies[m].id == this.getMovieId())
					return this.props.movies[m];
			}
			return null;
		}

		getMovie(id) {
			this.setState({ loaded: false });
			let merged_object, movie = this.selectMovie();
			if (movie !== null) {
				merged_object = this.mergeObjectWithState(movie);
				this.setState(merged_object);
			}
			HttpWrapper.getMovieDetails(id).then(response => {
				merged_object = this.mergeObjectWithState(response.data);
				merged_object.loaded = true;
				this.setState(merged_object);
				this.setLinkToIMDB(
					merged_object.title,
					merged_object.release_date
				);
			});
		}

		setLinkToIMDB(title, date) {
			HttpWrapper.getLinkToIMDB(title, date)
				.then(response => {
					response.data.hasOwnProperty("imdbID")
						? this.setState({ imdb_id: response.data.imdbID })
						: null;
				})
				.catch(response => null);
		}

		mergeObjectWithState(obj) {
			let movie_state = this.state;

			Object.keys(obj)
				.filter(key => key in movie_state)
				.forEach(key => (movie_state[key] = obj[key]));

			return movie_state;
		}

		componentWillReceiveProps(nextProps) {
			const next_id = nextProps.match.params.movie_id;
			if (this.getMovieId() !== next_id) {
				this.getMovie(next_id); // or setTimeout(() => this.getMovie(), 0); //next tick
			}
		}

		componentDidMount() {
			this.getMovie(this.getMovieId());
		}

		shouldComponentUpdate(nextProps, nextState) {
			return (
				nextState.loaded === this.state.loaded ||
				nextProps.match.params.movie_id == this.getMovieId()
			);
		}

		render() {
			return (
				<div style={{ width: "100%" }}>
					<div className="buttons-container">
						<button
							onClick={() => (document.location.hash = "/movies")}
						>
							↤
						</button>

					</div>

					<MovieDisplayComponent
						{...this.state}
						id={this.getMovieId()}
					/>
				</div>
			);
		}
	};
}
