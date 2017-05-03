import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./routes.jsx";
import { HashRouter as Router, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			data: { page: 0, total_results: 0, total_pages: 0 },
			is_loading: false,
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

	handleChange(event) {
		this.setState({ query: event.target.value });
	}
	enterKeyUp(event) {
		if (event.keyCode === 13) {
			this.setState({ is_loading: true });
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
					<Link to="2222">2222</Link>
					<Link to="aaaa">aaaa</Link>
					<Routes movies={this.state.movies} />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
