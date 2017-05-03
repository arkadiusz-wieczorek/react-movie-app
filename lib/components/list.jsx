import React, { Component } from "react";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props);
		console.log("mount");
	}
	componentWillReceiveProps() {}
	render() {
		return <div>MoviesList</div>;
	}
}
export default MoviesList;
