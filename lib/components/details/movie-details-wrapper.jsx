import React, { Component } from "react";
import HttpWrapper from "../../modules/http-wrapper";
const Body = document.querySelector("body");

export default function(MovieDisplayComponent) {
	return class MovieDetailsWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				poster_path: null,
				title: "",
				release_date: "",
				popularity: 0,
				vote_count: 0,
				vote_average: 0,
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
			let merged_object, movie = this.selectMovie();
			if (movie !== null) {
				merged_object = this.mergeObjectWithState(movie);
				this.setState(merged_object);
			}
			HttpWrapper.getMovieDetails(id)
				.then(response => {
					merged_object = this.mergeObjectWithState(response.data);
					this.setState(merged_object);
					this.setLinkToIMDB(
						merged_object.title,
						merged_object.release_date
					);
				})
				.catch(() => (document.location.hash = "/not-found"));
		}

		setLinkToIMDB(title, date) {
			HttpWrapper.getLinkToIMDB(title, date).then(response => {
				response.data.hasOwnProperty("imdbID")
					? this.setState({
							imdb_id: response.data.imdbID,
							loaded: true,
						})
					: this.setState({ loaded: true });
			}).catch((err) => this.setState({ loaded: true }))
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
			if (this.getMovieId() !== next_id) this.getMovie(next_id);
		}

		componentDidMount() {
			this.getMovie(this.getMovieId());
			Body.scrollIntoView();
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
							&#8592;
						</button>
					</div>
					<MovieDisplayComponent {...this.state} />
				</div>
			);
		}
	};
}
