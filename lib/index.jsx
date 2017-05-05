import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./routes.jsx";
import { HashRouter as Router, Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			metadata: { page: 0, total_results: 0, total_pages: 0 },
			movies: [],
			query: "",
			is_loading: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.searchMovies = this.searchMovies.bind(this);
		this.enterKeyUp = this.enterKeyUp.bind(this);
		this.sortMoviesByTitle = this.sortMoviesByTitle.bind(this);
	}

	searchMovies(query, page) {
		this.setState({ is_loading: true });
		HttpWrapper.getMovies(query, page)
			.then(res => {
				this.setState({
					metadata: {
						page: res.data.page,
						total_results: res.data.total_results,
						total_pages: res.data.total_pages,
					},
					movies: res.data.results,
					is_loading: false,
				});
			})
			.catch(error => {
				alert("Wystąpił błąd, spróbuj ponownie.");
				console.log(error);
			});
	}

	sortMoviesByTitle() {
		let sorted_movies = this.state.movies.sort((a, b) => {
			let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
			return titleA < titleB ? -1 : titleA === titleB ? 0 : 1;
		});
		this.setState({ movies: sorted_movies });
	}

	moveToPage(to_next) {
		let page = this.state.metadata.page;

		to_next && this.state.query !== ""
			? page + 1 <= this.state.metadata.total_pages
					? this.searchMovies(this.state.query, page + 1)
					: null
			: page - 1 > 0
					? this.searchMovies(this.state.query, page - 1)
					: null;
	}

	handleChange(event) {
		this.setState({ query: event.target.value });
	}
	enterKeyUp(event) {
		if (event.keyCode === 13) {
			this.searchMovies(this.state.query);
			document.location.hash = "/movies";
		}
	}
	render() {
		return (
			<Router>
				<div>
					<input
						value={this.state.value}
						onChange={this.handleChange}
						onKeyUp={this.enterKeyUp}
						type="text"
						placeholder="Jakiego filmu szukasz?"
					/>
					<button onClick={this.sortMoviesByTitle}>
						Sort movies
					</button>
					<button onClick={this.moveToPage.bind(this, false)}>
						Prev page
					</button>
					<button onClick={this.moveToPage.bind(this, true)}>
						Next page
					</button>
					<Routes
						movies={this.state.movies}
						is_loading={this.state.is_loading}
					/>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
