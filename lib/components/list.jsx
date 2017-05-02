import React from "react";

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return <div>MoviesList</div>;
	}
}
export default MoviesList;
