import React, { Component } from "react";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.match.params.movie_id);
	}
	componentWillReceiveProps() {}
	componentWillUpdate() {
		// console.log(this.props.match.params.movie_id);
		// console.log(window.location.hash);
	}
	render() {
		return <div>MovieDetails</div>;
	}
}
export default MovieDetails;
