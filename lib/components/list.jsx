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
		return (
			<div>
				MoviesList:
				{JSON.stringify(this.props.movies)}
			</div>
		);
	}
}
export default MoviesList;
