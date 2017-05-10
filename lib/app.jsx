import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./components/routes.jsx";
import Header from "./components/helpers/header.jsx";
import Footer from "./components/helpers/footer.jsx";
const Body = document.querySelector("body");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			metadata: { page: null, total_results: null, total_pages: null },
			movies: [],
			query: "",
			loaded: true,
			order: 1,
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
					order: 1,
				});
			})
			.catch(() => (document.location.hash = "/not-found"));
	}

	sortMoviesByTitle() {
		let order = this.state.order;
		let sorted_movies = this.state.movies.sort((a, b) => {
			let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
			return titleA < titleB
				? -1 * order
				: titleA === titleB ? 0 : 1 * order;
		});
		this.setState({ movies: sorted_movies, order: order * -1 });
	}

	moveToPage(offset) {
		let new_page = Math.min(
			Math.max(this.state.metadata.page + offset, 1),
			this.state.metadata.total_pages
		);
		this.searchMovies(this.state.query, new_page);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ query: e.target.value });
	}

	enterKeyUp(e) {
		e.preventDefault();
		if (e.keyCode === 13) {
			this.searchMovies(this.state.query);
			document.location.hash = "/movies";
		}
	}
	componentDidUpdate(prevProps, prevState) {
		prevState.metadata.page !== this.state.metadata.page
			? Body.scrollIntoView()
			: null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState.order !== this.state.order ||
			nextState.loaded !== this.state.loaded ||
			nextState.metadata.page !== this.state.metadata.page
		);
	}

	render() {
		return (
			<Router>
				<div>
					<Header
						value={this.state.query}
						onChange={this.handleChange}
						onKeyUp={this.enterKeyUp}
					/>
					<Routes
						{...this.state}
						sortMoviesByTitle={this.sortMoviesByTitle.bind(this)}
						moveToPage={this.moveToPage.bind(this)}
					/>
					<Footer />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
