import React, { Component } from "react";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.match.params.movie_id);
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.match.params.movie_id);
	}
	render() {
		return <div>MovieDetails: {this.props.match.params.movie_id}</div>;
	}
}
export default MovieDetails;
