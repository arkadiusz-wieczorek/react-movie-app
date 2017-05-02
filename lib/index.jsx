import React, { Component } from "react";
import ReactDOM from "react-dom";
import HttpWrapper from "./modules/http-wrapper";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		HttpWrapper.getMovies("video").then(response => {
			console.log(response.data);
		});
		// HttpWrapper.getMovieDetails(211478).then(response => {
		// 	console.log(response.data);
		// });
	}

	render() {
		return <div>MyApp</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
