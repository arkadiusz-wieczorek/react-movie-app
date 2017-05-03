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
				{this.props.is_loading
					? <div>MoviesList: is loading</div>
					: <div>MoviesList:{JSON.stringify(this.props.movies)}</div>}
			</div>
		);
	}
}
export default MoviesList;
