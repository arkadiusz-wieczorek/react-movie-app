import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";
import Routes from "./routes.jsx";
import { Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: {},
			page: 0,
		};
	}

	componentDidMount() {
		HttpWrapper.getMovies("video")
			.then(response => {
				this.setState({
					movies: response.data,
				});
			})
			.catch(error => {
				console.log(error);
			});
		// HttpWrapper.getMovieDetails(211478).then(response => {
		// 	console.log(response.data);
		// });
	}

	render() {
		return (
			<div>
				App

				<Routes movies={this.state.movies} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
