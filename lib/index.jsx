import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./routes.jsx";
import { HashRouter as Router, Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: { page: 0, total_results: 0, total_pages: 0 },
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
					data: {
						page: res.data.page,
						total_results: res.data.total_results,
						total_pages: res.data.total_pages,
					},
					movies: res.data.results,
					is_loading: false,
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	sortMoviesByTitle() {
		let sorted_movies = this.state.movies.sort((a, b) => {
			let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
		this.setState({ movies: sorted_movies });
	}

	moveToPage(to_next) {
		let page = this.state.data.page;
		const total_pages = this.state.data.total_pages;
		console.log(total_pages);
		if (to_next) {
			if (page + 1 <= total_pages && this.state.query !== "") {
				this.searchMovies(this.state.query, page + 1);
			}
		} else {
			if (page - 1 > 0 && this.state.query !== "") {
				this.searchMovies(this.state.query, page - 1);
			}
		}
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
					{/* <Link to="2222">2222</Link>
					<Link to="2223">2223</Link> */}
					<button onClick={this.moveToPage.bind(this, false)}>
						Prev page
					</button>
					<button onClick={this.moveToPage.bind(this, true)}>
						Next page
					</button>
					<div className="content">
						<Routes
							movies={this.state.movies}
							is_loading={this.state.is_loading}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
