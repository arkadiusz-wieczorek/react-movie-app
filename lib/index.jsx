import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./routes.jsx";
import { Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			data: {
				page: 0,
				total_results: 0,
				total_pages: 0,
			},
			movies: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.searchMovies = this.searchMovies.bind(this);
		this.enterKeyUp = this.enterKeyUp.bind(this);
	}

	componentDidMount() {
		// HttpWrapper.getMovieDetails(211478).then(response => {
		// 	console.log(response.data);
		// });
	}
	searchMovies(query) {
		HttpWrapper.getMovies(query)
			.then(res => {
				console.log(res.data.results);
				let data = {
					page: res.data.page,
					total_results: res.data.total_results,
					total_pages: res.data.total_pages,
				};
				let movies = res.data.results;

				this.setState({ data: data, movies: movies });
			})
			.catch(error => {
				console.log(error);
			});
	}

	handleChange(event) {
		this.setState({ query: event.target.value });
	}
	enterKeyUp(event) {
		if (event.keyCode === 13) this.searchMovies(this.state.query);
	}
	render() {
		return (
			<div>
				<input
					value={this.state.value}
					onChange={this.handleChange}
					onKeyUp={this.enterKeyUp}
					type="text"
					placeholder="Jakiego filmu szukasz?"
				/>
				<Routes movies={this.state.movies} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
