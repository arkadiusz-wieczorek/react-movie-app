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
			loaded: true,
			sorted: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.enterKeyUp = this.enterKeyUp.bind(this);
	}

	searchMovies(query, page) {
		this.setState({ loaded: false });
		HttpWrapper.getMovies(query, page)
			.then(res => {
				this.setState({
					metadata: {
						page: res.data.page,
						total_results: res.data.total_results,
						total_pages: res.data.total_pages,
					},
					movies: res.data.results,
					loaded: true,
					sorted: false,
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
		this.setState({ movies: sorted_movies, sorted: true });
	}

	moveToPage(offset) {
		let new_page = Math.min(
			Math.max(this.state.metadata.page + offset, 1),
			this.state.metadata.total_pages
		);
		this.searchMovies(this.state.query, new_page);
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
						value={this.state.query}
						onChange={this.handleChange}
						onKeyUp={this.enterKeyUp}
						type="text"
						placeholder="Jakiego filmu szukasz?"
					/>
					<Routes
						{...this.state}
						sortMoviesByTitle={this.sortMoviesByTitle.bind(this)}
						moveToPage={this.moveToPage.bind(this)}
					/>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
